import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/modals/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productdata !: Array<Iproduct>
  constructor(
    private productService: ProductService,
    private routes: ActivatedRoute,
    private router: Router
  ) { 
    console.log(this.routes.snapshot.data)
    this.productdata = this.routes.snapshot.data['product']
  }

  ngOnInit(): void {
    // this.getchdata()
  }

  getchdata() {
    this.productService.getProducts()
      .subscribe(res => {
        this.productdata = res
        if (this.productdata.length > 0 && this.router.url === '/product') {
          this.router.navigate([res[0].pid])
        }
      })
  }

  trackByfun(index: number, product: Iproduct) {
    return product.pid
  }


}
