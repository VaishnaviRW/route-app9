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
      userName: 'Rohan Patil',
      userId: 'EMP201',
      userRole: 'Admin',
      profileDescription: 'Senior Angular developer with experience in enterprise applications.',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
      skills: ['Angular', 'RxJS', 'NgRx', 'TypeScript'],
      experienceYears: '7 to 10 years',
      isActive: true,
      address: {
        current: {
          city: 'Pune',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '411001'
        },
        permanent: {
          city: 'Nashik',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '422001'
        }
      },
      isAddSame: false
    },
    {
      userName: 'Sneha Joshi',
      userId: 'EMP202',
      userRole: 'Candidate',
      profileDescription: 'Frontend developer passionate about UI and UX design.',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/6997/6997662.png',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      experienceYears: '1 to 3 years',
      isActive: true,
      address: {
        current: {
          city: 'Mumbai',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '400001'
        },
        permanent: {
          city: 'Nagpur',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '440001'
        }
      },
      isAddSame: true
    },
    {
      userName: 'Aditya Singh',
      userId: 'EMP203',
      userRole: 'Admin',
      profileDescription: 'Full-stack developer specializing in Angular and Node.js.',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
      skills: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      experienceYears: '5 to 7 years',
      isActive: false,
      address: {
        current: {
          city: 'Delhi',
          state: 'Delhi',
          country: 'India',
          zipcode: '110001'
        },
        permanent: {
          city: 'Jaipur',
          state: 'Rajasthan',
          country: 'India',
          zipcode: '302001'
        }
      },
      isAddSame: false
    },
    {
      userName: 'Kavya Reddy',
      userId: 'EMP204',
      userRole: 'Candidate',
      profileDescription: 'Angular developer focused on scalable and maintainable applications.',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png',
      skills: ['Angular', 'REST API', 'Git', 'TypeScript'],
      experienceYears: '3 to 5 years',
      isActive: true,
      address: {
        current: {
          city: 'Hyderabad',
          state: 'Telangana',
          country: 'India',
          zipcode: '500001'
        },
        permanent: {
          city: 'Vijayawada',
          state: 'Andhra Pradesh',
          country: 'India',
          zipcode: '520001'
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
