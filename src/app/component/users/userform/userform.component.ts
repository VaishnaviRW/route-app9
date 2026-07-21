import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ICanDeactivate } from 'src/app/modals/Deactivate';
import { Iuser } from 'src/app/modals/product';
import { SnakbarService } from 'src/app/services/snakbar.service';
import { UserService } from 'src/app/services/user.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit, ICanDeactivate {
  isInEditMode: boolean = false
  userForm !: FormGroup
  edituser !: Iuser
  userId !: string

  constructor(private userservice: UserService,
    private snackbar: SnakbarService,
    private router: Router,
    private routes: ActivatedRoute,
    private _matdilog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createUserForm()
    this.addSkillsControl()
    this.isPermenantAddHandler()
    this.isAddSameHandler()
    this.patchvalueinform()

  }

  isPermenantAddHandler() {
    this.formcontrols['address'].get('current')?.valueChanges
      .subscribe(val => {
        if (this.formcontrols['address'].get('current')?.valid) {
          this.formcontrols['isAddSame'].enable()
        } else {
          this.formcontrols['isAddSame'].reset()
          this.formcontrols['isAddSame'].disable()
        }
      })
  }

  isAddSameHandler() {
    this.formcontrols['isAddSame'].valueChanges
      .subscribe(val => {
        if (val) {
          let CurrentAdd = this.formcontrols['address'].get('current')?.value;
          this.formcontrols['address'].get('permanent')?.patchValue(CurrentAdd)
          this.formcontrols['address'].get('permanent')?.disable()
        } else if (this.isInEditMode && !val) {
          this.formcontrols['address'].get('permanent')?.patchValue(this.edituser.address.permanent)
          this.formcontrols['address'].get('permanent')?.enable()
        }
        else {
          this.formcontrols['address'].get('permanent')?.reset()
          this.formcontrols['address'].get('permanent')?.enable()
        }
      })
  }

  createUserForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userRole: new FormControl('Candidate'),
      profileDescription: new FormControl(null, Validators.required),
      profileImage: new FormControl(null, [Validators.required]),
      experienceYears: new FormControl(null, [Validators.required]),
      isActive: new FormControl(null, [Validators.required]),
      isAddSame: new FormControl({ value: null, disabled: true }),
      skills: new FormArray([]),

      address: new FormGroup({
        current: new FormGroup({
          city: new FormControl(null, [Validators.required]),
          state: new FormControl(null, [Validators.required]),
          country: new FormControl('India'),
          zipcode: new FormControl(null, [Validators.required])
        }),
        permanent: new FormGroup({
          city: new FormControl(null, [Validators.required]),
          state: new FormControl(null, [Validators.required]),
          country: new FormControl('India'),
          zipcode: new FormControl(null, [Validators.required])
        })
      })
    })
  }

  addSkillsControl() {
    let SkillControl = new FormControl(null, [Validators.required])
    this.skillsArr.push(SkillControl)
  }

  get formcontrols() {
    return this.userForm.controls
  }

  get skillsArr() {
    return this.formcontrols['skills'] as FormArray
  }

  onUserAdd() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched()
    } else {
      let USerDetails = { ...this.userForm.getRawValue(), userId: Date.now().toString() }
      this.userservice.adduser(USerDetails)
        .subscribe({
          next: res => {
            this.snackbar.OpenSnakbar(res.msg)
            this.router.navigate(['/users', res.data.userId], {
              queryParams: { userRole: res.data.userRole }
            });
          },
          error: err => {
            this.snackbar.OpenSnakbar(err.msg)
          }
        })
    }
  }

  onskillremove(i: number) {
    this.skillsArr.removeAt(i)
  }

  patchvalueinform() {
    this.userId = this.routes.snapshot.paramMap.get('id')!
    if (this.userId) {
      this.userservice.getsingleuser(this.userId).subscribe({
        next: res => {
          this.edituser = res
          this.isInEditMode = true
          this.userForm.patchValue(this.edituser)
          if (res.userRole === 'Candidate') {
            this.userForm.disable()
          }
          this.skillsArr.clear()
          
          this.edituser.skills.forEach(ele => {
            let control = new FormControl({
              value: ele,
              disabled : res.userRole === 'Candidate' ? true : false
            })
            this.skillsArr.push(control)
          })
        }
      })
    }
  }

  Updateuser() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched()
    } else {
      let USerDetails = { ...this.userForm.getRawValue(), userId: this.edituser.userId }
      this.userservice.updateuser(USerDetails)
        .subscribe({
          next: res => {
            this.snackbar.OpenSnakbar(res.msg)
            this.router.navigate(['/users', res.data.userId], {
              queryParams: { userRole: res.data.userRole }
            });
          },
          error: err => {
            this.snackbar.OpenSnakbar(err.msg)
          }
        })
    }
  }

    canDeactivate(): Observable<boolean> | boolean {
      if (!this.userForm.dirty || !this.isInEditMode) {
        return true
      }
      return this._matdilog.open(GetconfirmComponent, {
        width: '450px',
        disableClose: true,
        data: `Are you sure do you want to discard this changess...`
      }).afterClosed();
    }
}
