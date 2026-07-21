import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICanDeactivate } from 'src/app/modals/Deactivate';
import { Iproduct } from 'src/app/modals/product';
import { ProductService } from 'src/app/services/product.service';
import { SnakbarService } from 'src/app/services/snakbar.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit, ICanDeactivate {

  productform!: FormGroup
  isineditmode: boolean = false
  editobj!: Iproduct
  constructor(
    private _productservice: ProductService,
    private _snakbar: SnakbarService,
    private router: Router,
    private route: ActivatedRoute, 
    private _matdilog : MatDialog
  ) { }

  ngOnInit(): void {
    this.createform()
    this.patcheditproduct()
  }

  createform() {
    this.productform = new FormGroup({
      pname: new FormControl(null, Validators.required),
      pdescription: new FormControl(null, Validators.required),
      pstatus: new FormControl('In-Progress', Validators.required),
      pprice: new FormControl(null, Validators.required),
      canReturn: new FormControl(null, Validators.required),
      pimage: new FormControl(null, Validators.required),
    })
  }

  onAddProduct() {
    let val = this.productform.value
    if (this.productform.invalid) {
      this.productform.markAllAsTouched()
    } else {
      let newobj: Iproduct = {
        ...val, pid: Date.now().toString()
      }

      this._productservice.Addproduct(newobj)
        .subscribe({
          next: res => {
            this.router.navigate(['/product', res.data.pid])
            this._snakbar.OpenSnakbar(res.msg)
          },
          error: err => {
            console.log(err);
          }
        })
    }
  }

  patcheditproduct() {
    let params = this.route.snapshot.paramMap.get('id')
    if (params) {
      this.isineditmode = true
      this._productservice.getProductById(params)
        .subscribe({
          next: res => {
            if (res) {
              this.editobj = res
              if (res.canReturn === 0) {
                this.productform.disable()
              }
              this.productform.patchValue(res)
            }
          }
        })
    }
  }

  onUpadate() {
    let val = this.productform.value
    if (this.productform.invalid) {
      this.productform.markAllAsTouched()
    } else {
      let updatedObj: Iproduct = {
        ...val, pid: this.editobj.pid
      }

      this._productservice.Updateproduct(updatedObj)
        .subscribe({
          next: res => {
            this.isineditmode = false
            this.router.navigate(['/product', res.data.pid])
            this._snakbar.OpenSnakbar(res.msg)
          },
          error: err => {
            console.log(err);
          }
        })
    }
  }

  canDeactivate(): boolean | Observable<boolean> {
    if(!this.productform.dirty || !this.isineditmode) {
      return true
    }

    return this._matdilog.open(GetconfirmComponent, {
      width : '450px',
      disableClose : true,
      data : `Are you sure do you want to discard this changess...`
    }).afterClosed()
  }
}
