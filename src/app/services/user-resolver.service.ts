import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iuser } from '../modals/product';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<Iuser[]>{
  private _userservice = inject(UserService)
  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iuser[] | Observable<Iuser[]> | Promise<Iuser[]> {
    return this._userservice.getusers()
  }
}
