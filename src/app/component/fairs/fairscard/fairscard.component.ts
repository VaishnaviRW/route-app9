import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/modals/product';

@Component({
  selector: 'app-fairscard',
  templateUrl: './fairscard.component.html',
  styleUrls: ['./fairscard.component.scss']
})
export class FairscardComponent implements OnInit {

  @Input() fairobj! : Ifairs
  constructor() { }

  ngOnInit(): void {
  }

}
