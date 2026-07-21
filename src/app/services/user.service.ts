import { Injectable } from '@angular/core';
import { Ires, Iuser } from '../modals/product';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private refreshUsers = new Subject<void>();
  refreshUsers$ = this.refreshUsers.asObservable();
  UsersDetails: Array<Iuser> = [
    {
    userName: 'Aarav Sharma',
    userId: 'EMP101',
    userRole: 'Admin',
    profileDescription: 'Passionate Angular developer with expertise in modern web applications.',
    profileImage: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
    skills: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    experienceYears: '3 to 5 years',
    isActive: true,
    address: {
      current: {
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
        zipcode: '560001'
      },
      permanent: {
        city: 'Mysuru',
        state: 'Karnataka',
        country: 'India',
        zipcode: '570001'
      }
    },
    isAddSame: false
  },
  {
    userName: 'Priya Verma',
    userId: 'EMP102',
    userRole: 'Candidate',
    profileDescription: 'Skilled in creating responsive and user-friendly web interfaces.',
    profileImage: 'https://cdn-icons-png.flaticon.com/512/6997/6997662.png',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    experienceYears: '1 to 3 years',
    isActive: true,
    address: {
      current: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
        zipcode: '500001'
      },
      permanent: {
        city: 'Warangal',
        state: 'Telangana',
        country: 'India',
        zipcode: '506002'
      }
    },
    isAddSame: true
  },
  {
    userName: 'Rahul Mehta',
    userId: 'EMP103',
    userRole: 'Admin',
    profileDescription: 'Experienced in Angular, Node.js, and MongoDB development.',
    profileImage: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
    skills: ['Angular', 'Node.js', 'Express', 'MongoDB'],
    experienceYears: '5 to 7 years',
    isActive: false,
    address: {
      current: {
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India',
        zipcode: '380001'
      },
      permanent: {
        city: 'Surat',
        state: 'Gujarat',
        country: 'India',
        zipcode: '395003'
      }
    },
    isAddSame: false
  },
  {
    userName: 'Neha Kulkarni',
    userId: 'EMP104',
    userRole: 'Candidate',
    profileDescription: 'Focused on building scalable Angular applications with clean architecture.',
    profileImage: 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png',
    skills: ['Angular', 'TypeScript', 'REST API', 'Git'],
    experienceYears: '3 to 5 years',
    isActive: true,
    address: {
      current: {
        city: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India',
        zipcode: '600001'
      },
      permanent: {
        city: 'Coimbatore',
        state: 'Tamil Nadu',
        country: 'India',
        zipcode: '641001'
      }
    },
    isAddSame: true
  }
  ];

  constructor() { }

  refreshList() {
    this.refreshUsers.next();
  }

  getusers(): Observable<Array<Iuser>> {
    return of(this.UsersDetails)
  }

  getsingleuser(id: string): Observable<Iuser> {
    return of(this.UsersDetails.find(ele => ele.userId === id)!)
  }

  adduser(user: Iuser): Observable<Ires<Iuser>> {
    this.UsersDetails.push(user)

    return of({
      msg: `The user is with id ${user.userId} is Added successfully!!!`,
      data: user
    })
  }

  removeuser(id: string): Observable<Ires<Iuser>> {
    let getindex = this.UsersDetails.findIndex(ele => ele.userId === id)
    let user = this.UsersDetails.splice(getindex, 1)

    return of({
      msg: `The user is with id ${user[0].userId} is Removed successfully!!!`,
      data: user[0]
    })
  }

  updateuser(user: Iuser): Observable<Ires<Iuser>> {
    let getindex = this.UsersDetails.findIndex(ele => ele.userId === user.userId)
    this.UsersDetails[getindex] = user

    return of({
      msg: `The user is with id ${user.userId} is Updated successfully!!!`,
      data: user
    })
  }
}
