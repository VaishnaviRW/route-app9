import { Injectable } from '@angular/core';
import { Ifairs } from '../modals/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FairsService {

  fairsArr: Array<Ifairs> = [
    {
      fairId: 'F101',
      fairName: 'Tech Career Expo 2026',
      startDate: 1780233600,
      endDate: 1780320000,
      timezoneId: 'India Standard Time',
      location: {
        addressOne: 'Pune Convention Center',
        addressTwo: 'Senapati Bapat Road',
        city: 'Pune',
        state: 'Maharashtra',
        country: 'India',
        zip: '411016'
      },
      numberOfUsersRegistered: 120,
      numberOfSchoolsRegistered: 25,
      isCandidateRegistered: true,
      bannerUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
      showRegisteredUsersToCandidate: true,
      showRegisteredUsersToSchools: true,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: true,
      fairStatus: 'published',
      fairStartTime: '9:00 AM',
      fairEndTime: '5:00 PM',
      type: 'InPerson',
      candidateDescription: 'Meet top recruiters and explore career opportunities.',
      schoolDescription: 'Connect with qualified candidates from across India.'
    },
    {
      fairId: 'F102',
      fairName: 'Virtual Education Fair',
      startDate: 1780838400,
      endDate: 1780838400,
      timezoneId: 'India Standard Time',
      location: null,
      numberOfUsersRegistered: 200,
      numberOfSchoolsRegistered: 40,
      isCandidateRegistered: false,
      bannerUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      showRegisteredUsersToCandidate: false,
      showRegisteredUsersToSchools: true,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: true,
      fairStatus: 'published',
      fairStartTime: '10:00 AM',
      fairEndTime: '4:00 PM',
      type: 'Virtual',
      candidateDescription: 'Attend online sessions and interviews from home.',
      schoolDescription: 'Interact with talented candidates virtually.'
    },
    {
      fairId: 'F103',
      fairName: 'Engineering Placement Fair',
      startDate: 1781443200,
      endDate: 1781529600,
      timezoneId: 'India Standard Time',
      location: {
        addressOne: 'Hyderabad Expo Center',
        addressTwo: 'HITEC City',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
        zip: '500081'
      },
      numberOfUsersRegistered: 180,
      numberOfSchoolsRegistered: 30,
      isCandidateRegistered: true,
      bannerUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
      showRegisteredUsersToCandidate: true,
      showRegisteredUsersToSchools: false,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: false,
      fairStatus: 'published',
      fairStartTime: '8:00 AM',
      fairEndTime: '6:00 PM',
      type: 'InPerson',
      candidateDescription: 'Placement opportunities for engineering graduates.',
      schoolDescription: 'Recruit fresh engineering talent.'
    }
  ];
  constructor() { }

  getfairsArr(){
    return of(this.fairsArr)
  }

  getfairById(id : string){
    return of(this.fairsArr.find(ele => ele.fairId == id))
  }
}
