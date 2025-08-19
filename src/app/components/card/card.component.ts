import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() name: string = '';
  @Input() desc: string = '';
  @Input() type: string = '';
  @Input() img: string = '';
  @Input() damage: number = 0;
  @Input() range: string[][];
  @Input() printMode: boolean = false;

  //-------------------------------------------------------------------------------------------------------------------
  constructor() { }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  ngOnInit() { }

}
