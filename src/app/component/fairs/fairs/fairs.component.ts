import { Component, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/modals/product';
import { FairsService } from 'src/app/services/fairs.service';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {

  fairsdata ! : Ifairs[]
  constructor(private _fairservice : FairsService) { }

  ngOnInit(): void {
   this.getfairsdata()
  }

  getfairsdata(){
    this._fairservice.getfairsArr()
      .subscribe(res => {
        this.fairsdata = res
      })
  }

  trackbyfun(index : number, fair : Ifairs){
    return fair.fairId
  }
}
