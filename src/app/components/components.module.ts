import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TypeComponent } from './type/type.component';
import { IonicModule } from '@ionic/angular';
import { RangeComponent } from './range/range.component';

@NgModule({
  declarations: [
    CardComponent,
    TypeComponent,
    RangeComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CardComponent,
    TypeComponent,
    RangeComponent
  ]
})
export class ComponentsModule { }
