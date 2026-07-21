import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/modals/product';
import { ProductService } from 'src/app/services/product.service';
import { SnakbarService } from 'src/app/services/snakbar.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-singlproduct',
  templateUrl: './singlproduct.component.html',
  styleUrls: ['./singlproduct.component.scss']
})
export class SinglproductComponent implements OnInit {

  productId !: string;
  product !: Iproduct;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private _matdilog: MatDialog,
    private _snakbar: SnakbarService
  ) { }

  ngOnInit(): void {
    this.getsingleproduct()
  }

  getsingleproduct() {
    this.route.paramMap.subscribe(res => {
      this.productId = res.get('id')!

      this.productService.getProductById(this.productId)
        .subscribe({
          next: (res => {
            this.product = res!
          }),
          error: err => {
            console.log(err);
          }
        })
    })
  }

  onRemove() {
    this._matdilog.open(GetconfirmComponent, {
      width: '500px',
      disableClose: true,
      data: `Are you sure do you want to remove this product whose id is ${this.product.pid}`
    }).afterClosed().subscribe(res => {
      if (res) {
        this.productService.Removeproduct(this.product.pid)
          .subscribe({
            next: res => {
              this.navigeteFirst()
              this._snakbar.OpenSnakbar(res.msg)
            },
            error: err => {
              console.log(err);
            }
          })
      }
    })
  }

  navigeteFirst(){
    this.productService.getProducts()
      .subscribe(res => {
        this.router.navigate(['/product', res[0].pid])
      })
  }

  onEdit() {
    this.router.navigate(['/product', this.productId, 'edit'], {
      queryParamsHandling: 'preserve',
      relativeTo: this.route
    })
  }

}
