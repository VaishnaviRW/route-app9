import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iproduct } from '../modals/product';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Iproduct[]>{

  private _productservice = inject(ProductService)
  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproduct[] | Observable<Iproduct[]> | Promise<Iproduct[]> {
    return this._productservice.getProducts()
  }

}
