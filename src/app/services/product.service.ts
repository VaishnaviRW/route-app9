import { Injectable } from '@angular/core';
import { Iproduct, Ires } from '../modals/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsArr: Array<Iproduct> = [
    {
      pid: 'P301',
      pname: 'iPhone 16 Pro',
      pprice: 139900,
      pstatus: 'Delivered',
      canReturn: 1,
      pdescription: 'A18 Pro chip, 256GB storage, advanced camera system and titanium design.',
      pimage: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569'
    },
    {
      pid: 'P302',
      pname: 'HP Victus Gaming Laptop',
      pprice: 84999,
      pstatus: 'Dispatched',
      canReturn: 1,
      pdescription: 'AMD Ryzen 7 Processor, 16GB RAM, 512GB SSD, RTX 4050 Graphics.',
      pimage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
    },
    {
      pid: 'P303',
      pname: 'Boat Airdopes 141',
      pprice: 1499,
      pstatus: 'In-Progress',
      canReturn: 1,
      pdescription: 'True wireless earbuds with ENx technology and 42 hours playback.',
      pimage: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37'
    },
    {
      pid: 'P304',
      pname: 'Samsung 55 Inch QLED TV',
      pprice: 72999,
      pstatus: 'Delivered',
      canReturn: 0,
      pdescription: '4K Ultra HD Smart QLED TV with Quantum HDR and voice assistant support.',
      pimage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6'
    },
    {
      pid: 'P305',
      pname: 'Sony PlayStation 5',
      pprice: 54990,
      pstatus: 'Dispatched',
      canReturn: 1,
      pdescription: 'Next-generation gaming console with ultra-high-speed SSD.',
      pimage: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db'
    },
    {
      pid: 'P306',
      pname: 'Apple iPad Air',
      pprice: 59900,
      pstatus: 'Delivered',
      canReturn: 1,
      pdescription: 'M2 chip, 11-inch Liquid Retina display, Wi-Fi model.',
      pimage: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0'
    },
    {
      pid: 'P307',
      pname: 'Noise ColorFit Pro 5',
      pprice: 3999,
      pstatus: 'In-Progress',
      canReturn: 1,
      pdescription: 'Smartwatch with AMOLED display, Bluetooth calling and health tracking.',
      pimage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
      pid: 'P308',
      pname: 'Canon EOS R50 Camera',
      pprice: 67999,
      pstatus: 'Delivered',
      canReturn: 0,
      pdescription: 'Mirrorless camera with 24.2MP APS-C sensor and 4K video recording.',
      pimage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32'
    }
  ];
  constructor() { }

  getProducts(): Observable<Iproduct[]> {
    return of(this.productsArr)
  }

  getProductById(id: string) {
    return of(this.productsArr.find(product => product.pid === id));
  }

  Addproduct(pro: Iproduct): Observable<Ires<Iproduct>> {
    this.productsArr.push(pro)

    return of({
      msg: `The product with id ${pro.pid} is Added Successfully!!!`,
      data: pro
    })
  }

  Removeproduct(id: string): Observable<Ires<Iproduct>> {
    let getindex = this.productsArr.findIndex(ele => ele.pid === id)
    let pro = this.productsArr.splice(getindex, 1)

    return of({
      msg: `The product with id ${pro[0].pid} is Removed Successfully!!!`,
      data: pro[0]
    })
  }

  Updateproduct(pro: Iproduct): Observable<Ires<Iproduct>> {
    let getindex = this.productsArr.findIndex(ele => ele.pid === pro.pid)
    this.productsArr[getindex] = pro

    return of({
      msg: `The product with id ${pro.pid} is Updated Successfully!!!`,
      data: pro
    })
  }
}
