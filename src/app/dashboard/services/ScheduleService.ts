import { Status } from '@interface/appointment';

export default class ScheduleService {
  static async getClinicSchedule(flowwwToken: string) {
    try {
      const url = `${process.env.NEXT_PUBLIC_SCHEDULE_API}Appointment/v2/Next?token=${flowwwToken}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        return '';
      }
    } catch (err) {
      return err;
    }
  }

  static async updatePatientStatusAppointment(
    appointmentId: string,
    id: string,
    status: Status
  ) {
    try {
      const url = `${process.env.NEXT_PUBLIC_SCHEDULE_API}Appointment/Status`;
      const requestBody = {
        appointmentId: appointmentId,
        userId: id,
        status: status,
      };

      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        return '';
      }
    } catch (err) {
      return '';
    }
  }
  static async getAppointmentsPerClinic(clinicId: string, boxId: string) {
    try {
      const url = `${process.env.NEXT_PUBLIC_SCHEDULE_API}Appointment/PerClinic?clinicId=${clinicId}&boxId=${boxId}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        return '';
      }
    } catch (err) {
      return err;
    }
  }
}
