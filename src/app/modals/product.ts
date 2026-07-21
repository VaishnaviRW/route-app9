export interface Ifairs {
  fairId: string
  fairName: string
  startDate: number
  endDate: number
  timezoneId: string
  location?: ILocation | null
  numberOfUsersRegistered: number
  numberOfSchoolsRegistered: number
  isCandidateRegistered: boolean
  bannerUrl: string
  showRegisteredUsersToCandidate: boolean
  showRegisteredUsersToSchools: boolean
  showRegisteredSchoolsToCandidate: boolean
  showRegisteredSchoolsToSchools: boolean
  fairStatus: string
  fairStartTime: string
  fairEndTime: string
  type: string
  candidateDescription: string
  schoolDescription: string
}

export interface ILocation {
  addressOne: string
  addressTwo: string
  city: string
  state: string
  country: string
  zip: string
}

export interface Iuser { 
    userName: string;
    userId: string;
    userRole: string;
    profileDescription: string;
    profileImage: string;
    skills: string[];
    experienceYears: string;
    isActive: boolean;
    address: {
        current: {
            city: string;
            state: string;
            country: string;
            zipcode: string;
        };
        permanent: {
            city: string;
            state: string;
            country: string;
            zipcode: string;
        };
    };
    isAddSame: boolean;
}

export interface Iproduct{
    pid: string;
    pname: string;
    pprice: number;
    pstatus: 'In-Progress' | 'Dispatched' | 'Delivered';
    canReturn: 1 | 0;
    pdescription: string;
    pimage: string;
}

export interface Ires<T>{
    msg : string;
    data : T;
}