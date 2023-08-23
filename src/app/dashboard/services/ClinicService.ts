import { Professional, ProfessionalType } from '@interface/clinic';

export default class clinicService {
  static async getProfessionalsByClinic(
    id: string,
    professionalType: ProfessionalType
  ): Promise<Professional[] | string> {
    // eslint-disable-next-line no-useless-catch
    try {
      let url = `${process.env.NEXT_PUBLIC_CLINICS_API}Clinics/${id}`;
      if (professionalType !== ProfessionalType.All) {
        url += `?professionalType=${professionalType}`;
      }
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        return data as Professional[];
      } else {
        throw new Error('Error fetching data from the API');
      }
    } catch (err) {
      throw err;
    }
  }

  static async getClinics() {
    try {
      const url = `${process.env.NEXT_PUBLIC_CLINICS_API}Clinics`;
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

  static async PatientArrived(props: any) {
    console.log(props);
    const patientArrived: any = {
      clinicId: props.clinicId,
      boxId: props.boxId,
    };
    try {
      const url = `${process.env.NEXT_PUBLIC_CLINICS_API}PatientArrived`;

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientArrived),
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
}
