import React, { useEffect, useState } from 'react';
import Bugsnag from '@bugsnag/js';
import { PatientStatus } from '@interface/appointment';
import ScheduleService from '@services/ScheduleService';
import UserService from '@services/UserService';
import { Button } from 'designSystem/Buttons/Buttons';
import { Text } from 'designSystem/Texts/Texts';
import { Html5Qrcode } from 'html5-qrcode';
import { SvgSpinner } from 'icons/Icons';

interface props {
  name: string;
  hour: string;
  professional: string;
  professionalId: string;
  userId: string;
}

interface QRScannerProps {
  onScanSuccess: (properties: props) => void;
  onErrorScan: (delay: number) => void;
}

function ReadQR({ onScanSuccess, onErrorScan }: QRScannerProps) {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode('qr-reader');
    const qrCodeSuccessCallback = async (UserId: any, decodedResult: any) => {
      html5QrCode.stop();
      setScanResult(decodedResult);
      setIsLoading(true);
      const user = await UserService.getUserById(UserId);

      if (user.Name != null) {
        const appointmentInfo = await ScheduleService.getClinicSchedule(
          user.flowwwToken
        );
        await ScheduleService.updatePatientStatusAppointment(
          appointmentInfo.id,
          UserId,
          PatientStatus.Pending
        );

        const props = {
          name: user.Name,
          hour: appointmentInfo.startTime,
          professional: appointmentInfo.clinicProfessional.name,
          professionalId: appointmentInfo.clinicProfessional.id,
          userId: user.id,
        };
        onScanSuccess(props);
      } else {
        setError('Usuario no encontrado');
        onErrorScan(5000);
      }
      setIsLoading(false);
    };

    function error(err: any) {
      Bugsnag.notify(err);
    }

    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    html5QrCode.start(
      { facingMode: 'user' },
      config,
      qrCodeSuccessCallback,
      error
    );
  }, [onScanSuccess]);

  function stopScan() {
    onErrorScan(5);
  }

  return (
    <div>
      {scanResult ? (
        isLoading ? (
          <SvgSpinner height={24} width={24} />
        ) : (
          <div>
            <Text> {error ? error : 'Código escaneado correctamente'} </Text>
          </div>
        )
      ) : (
        <div>
          <div id="qr-reader" style={{ width: '600px' }}></div>
          <Button
            size="sm"
            style="primary"
            onClick={stopScan}
            className="px-4 mt-auto"
          >
            Cancelar
          </Button>
        </div>
      )}
    </div>
  );
}

export default ReadQR;
