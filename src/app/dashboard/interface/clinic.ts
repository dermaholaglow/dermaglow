export interface Clinic {
  id: string;
  city: string;
  address: string;
  professionals: Professional[];
}

export interface Professional {
  name: string;
  professionalType: ProfessionalType;
}

export enum ProfessionalType {
  None = 0,
  Medical = 1,
  BeautyAdvisor = 2,
  Others = 3,
}
