import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGardService implements CanActivate {

  private _authservice = inject(AuthService)
  constructor(

  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userRoleArr : Array<string> = route.data['userRole'];
    let logedInuser :string = this._authservice.getuserRole()!
    return userRoleArr.includes(logedInuser)
  }
}
