import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifairs } from 'src/app/modals/product';
import { FairsService } from 'src/app/services/fairs.service';

@Component({
  selector: 'app-fair-description',
  templateUrl: './fair-description.component.html',
  styleUrls: ['./fair-description.component.scss']
})
export class FairDescriptionComponent implements OnInit {

  fairdata !: Ifairs
  constructor(
    private _fairservice :FairsService,
    private routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getfairbyId()
  }

  getfairbyId(){
    this.routes.paramMap.subscribe(res => {
      let fairid = res.get('id')!
      this._fairservice.getfairById(fairid)
        .subscribe({
          next : res => {
            this.fairdata = res!
          },
          error : err => {
            console.log(err);
          }
        })
    })
  }
}
