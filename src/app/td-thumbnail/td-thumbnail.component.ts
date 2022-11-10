import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TdService } from '../services/td.service';
import { InteractionService } from '../services/interaction.service';


@Component({
  selector: 'app-td-thumbnail',
  templateUrl: './td-thumbnail.component.html',
  styleUrls: ['./td-thumbnail.component.css']
  
})
export class TdThumbnailComponent implements OnInit {

  @Input() td:any

  @Input() checkbox:boolean

  tds: any[]

  score: string
  partyScore: number

  compareTds: any[]

  constructor(private tdService: TdService, 
              private _interactionService: InteractionService,
              private scroll: ViewportScroller) { }
  
  ngOnInit() {
    this.tds = this.tdService.getTds()
    this.score = './assets/images/did_not_vote.jpg'

    if (this.td && this.td.score) {
      switch(this.td.score) {
        case 'positive': {
          this.score = './assets/images/positive.jpg'
          break;
        }
        case 'negative': {
          this.score = './assets/images/negative.jpg'
          break;
        }
        default: {
          this.score = './assets/images/did_not_vote.jpg'
        }
      }

      this.partyScore = Math.round(this.tdService.getPartyScore(this.td.partyName))
    }
  }
  
compareVal(event) {
  if(event.target.checked){
    this.td.comparison=true;
    this.compareTds = this.tds.filter(td => td.comparison == true);

  }
  else{
      this.td.comparison=false;
      this.compareTds = this.tds.filter(td => td.comparison == true);
  }
}

spotChange(){
  this._interactionService.sendMessage('Checkbox Clicked');
}

scrollToTop(){
  this.scroll.scrollToPosition([0,0]);
}

}  