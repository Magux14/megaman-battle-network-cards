import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {

  @Input() orientation: string = 'up';
  @Input() type: string = 'normal';
  public color: string = 'black';
  public icon: string = 'tv-icon';

  //-------------------------------------------------------------------------------------------------------------------
  constructor() { }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  ngOnInit() {
    this.setColor();
    this.setIcon();
  }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  private setColor() {
    switch (this.type) {
      case 'normal': this.color = 'black'; break;
      case 'especial': this.color = '#33ACFF'; break;
      case 'magia': this.color = '#0EB913'; break;
      case 'negar': this.color = '#B9160E'; break;
      case 'mejora': this.color = '#FD760C'; break;
      case 'deterioro': this.color = '#FDE00C'; break;
    }
  }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  private setIcon() {
    switch (this.type) {
      case 'normal':
      case 'especial': this.icon = 'tv-icon'; break;
      case 'magia': this.icon = 'star'; break;
      case 'negar': this.icon = 'negate'; break;
      case 'mejora': this.icon = 'thumbs-up'; break;
      case 'deterioro': this.icon = 'thumbs-down'; break;
    }
  }

}
