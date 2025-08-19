import { Component } from '@angular/core';
import { lstNormalCards, lstEquipment } from '../../../data';
import { PrintService } from 'src/services/print.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public lstAllCards = [
    ...lstNormalCards,
    // ...lstMagicCards,
    // ...lstUpgradeCards,
    // ...lstDowngradeCards,
  ];
  public lstEquipment = lstEquipment;
  public printMode: boolean = false;
  public printing: boolean = false;

  //-------------------------------------------------------------------------------------------------------------------
  constructor(
    private printService: PrintService
  ) { }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public ngOnInit() {
    const lstNormal = this.lstAllCards.filter(item => item.type == 'normal');
    const lstSpecial = this.lstAllCards.filter(item => item.type == 'especial');
    const lstMagic = this.lstAllCards.filter(item => item.type == 'magia');
    const lstUpgrade = this.lstAllCards.filter(item => item.type == 'mejora');
    const lstDowngrade = this.lstAllCards.filter(item => item.type == 'deterioro');

    /*
    Deben de haber:
    30 canales especiales.
    35 canales normales.
    25 magias.
    14 mejoras.
    8 deterioros.
    15 negaciones.
    */

    const sumaTotalActuales = () => {
      return lstEquipment.length + lstNormal.length;
    }

    // console.log('especial: ', lstSpecial.length, 'faltan: ', 30 - lstSpecial.length);
    // console.log('normal: ', lstNormal.length, 'faltan: ', lstNormal.length);
    // // console.log('magia: ', lstMagic.length, 'faltan: ', 25 - lstMagic.length);
    // // console.log('mejora: ', lstUpgrade.length, 'faltan: ', 14 < - lstUpgrade.length);
    // // console.log('deterioro: ', lstDowngrade.length, 'faltan: ', 8 - lstDowngrade.length);
    // console.log('total: ', sumaTotalActuales(), 'faltan: ', 40 - sumaTotalActuales());

    // console.log(lstNormalCards[Math.floor(Math.random() * lstNormalCards.length)].desc);
    console.log(this.lstAllCards.length);
  }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public async print() {
    this.printing = true;
    setTimeout(async () => {
      let lstHtmlElements = document.getElementsByClassName("print-card");
      await this.printService.getZipImages(lstHtmlElements as any);
      this.printing = false;
    }, 500);
  }

}
