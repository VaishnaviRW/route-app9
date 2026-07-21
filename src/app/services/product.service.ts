import { Injectable } from '@angular/core';
import { Iproduct, Ires } from '../modals/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsArr: Array<Iproduct> = [
    {
    pid: 'P201',
    pname: 'Apple MacBook Air M3',
    pprice: 124999,
    pstatus: 'Delivered',
    canReturn: 1,
    pdescription: '13.6-inch Liquid Retina Display, Apple M3 Chip, 16GB RAM, 512GB SSD.',
    pimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9u-Gq_nfvMxAzx7BUbEUF37VF5Pn-jJqKPVrmcEAgA&s=10'
  },
  {
    pid: 'P202',
    pname: 'Samsung Galaxy S24 Ultra',
    pprice: 129999,
    pstatus: 'Dispatched',
    canReturn: 1,
    pdescription: '6.8-inch AMOLED Display, Snapdragon 8 Gen 3, 12GB RAM, 256GB Storage.',
    pimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckMqRPe5BEhv7x4bwKHQpqBKNg5Z9Q4qj_Lb2o-tcKv31vRUJP1fLhzM&s=10'
  },
  {
    pid: 'P203',
    pname: 'Sony WH-1000XM5',
    pprice: 29990,
    pstatus: 'In-Progress',
    canReturn: 1,
    pdescription: 'Premium Wireless Noise Cancelling Headphones with 30-hour battery life.',
    pimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6BuJLkP4bECcTPLexong_qtl8ACiVH5RL3f4M2wliw&s=10'
  },
  {
    pid: 'P204',
    pname: 'LG OLED evo 55" Smart TV',
    pprice: 119990,
    pstatus: 'Delivered',
    canReturn: 0,
    pdescription: '55-inch 4K OLED evo Display with Dolby Vision and Dolby Atmos.',
    pimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYsL8DHNDp0tMzcEw3b8VYrtVHTkMGSmb6SnbYSbD_w&s=10  '
  },
  {
    pid: 'P205',
    pname: 'Dell XPS 15',
    pprice: 169999,
    pstatus: 'Dispatched',
    canReturn: 1,
    pdescription: 'Intel Core Ultra 7 Processor, 16GB RAM, 1TB SSD, NVIDIA RTX Graphics.',
    pimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4WIADK-5lfMpIuhCGUFhwQE9hFMCjftM5IXgfuU_jg&s=10'
  },
  {
    pid: 'P206',
    pname: 'Apple Watch Series 10',
    pprice: 46999,
    pstatus: 'In-Progress',
    canReturn: 1,
    pdescription: 'Always-On Retina Display, GPS, Heart Rate Monitoring, Fitness Tracking.',
    pimage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/s10-case-unselect-gallery-1-202409'
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
