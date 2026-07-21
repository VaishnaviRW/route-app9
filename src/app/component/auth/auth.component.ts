import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin, Isignin } from 'src/app/modals/auth';
import { AuthService } from 'src/app/services/auth.service';
import { SnakbarService } from 'src/app/services/snakbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  isAleradyHaveAccount : boolean= false
  loginform! : FormGroup
  signInform! : FormGroup
  constructor(
    private authservice : AuthService,
    private snakbar : SnakbarService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createloginform()
    this.createSignInform()
  }

  createloginform(){
    this.loginform = new FormGroup({
      email : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required)
    })
  }

  createSignInform(){
    this.signInform = new FormGroup({
      email : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required),
      userRole : new FormControl(null, Validators.required) 
    })
  }

  onLogin(){
    if(this.loginform.invalid){
      this.loginform.markAllAsTouched()
    }else{
      let loginObj : Ilogin = {
        ...this.loginform.value
      }

      this.authservice.Login(loginObj).subscribe({
        next : res => {
          this.snakbar.OpenSnakbar(res.message)
          this.authservice.saveToken(res.token)
          this.authservice.saveUserrole(res.userRole)
          this.router.navigate(['home'],
          )
        },
        error : err => {
          console.log(err);
          this.snakbar.OpenSnakbar(err.error.message)
        }
      })
    }
  }

  onSignIn(){
    if(this.signInform.invalid){
      this.signInform.markAllAsTouched()
    }else{
      let userDetails : Isignin = {
        ...this.signInform.value
      }
      this.authservice.SignIn(userDetails).subscribe({
        next :res => {
          this.snakbar.OpenSnakbar(res.message)
          this.isAleradyHaveAccount = true
        },
        error : err => {
          this.snakbar.OpenSnakbar(err.error.message)
          if(err.error.message){
            this.isAleradyHaveAccount = true
          }
        }
      })
    }
  }

  get l(){
    return this.loginform.controls
  }

  get s(){
    return this.signInform.controls
  }
}
