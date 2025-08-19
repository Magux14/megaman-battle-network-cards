import { Injectable } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Injectable({
    providedIn: 'root'
})
export class PrintService {

    //-------------------------------------------------------------------------------------------------------------------
    constructor(
    ) {

    }

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    public async getZipImages(lstHtmlElements: any[]) {
        let lstPromises = [];
        for (let i = 0; i < lstHtmlElements.length; i++) {
            lstPromises.push({
                promise: htmlToImage.toJpeg(lstHtmlElements[i], { quality: 1 }),
                name: lstHtmlElements[i].querySelector('.name-container')?.innerHTML.trim(),
                type: lstHtmlElements[i].getAttribute('ng-reflect-type')
            });
        }

        console.log('resolving promises...');
        let lstResp: { name: string, base64: string, type: string }[] = await Promise.all(lstPromises.map(async item => {
            return {
                base64: await item.promise,
                name: item.name,
                type: item.type
            }
        }));
        lstResp = lstResp.sort((a, b) => a.type > b.type ? 1 : -1);
        console.log('adding to zip...');
        const zip = new JSZip();
        for (let i = 0; i < lstResp.length; i++) {
            zip.file(`cards/${(i + 1)}_${lstResp[i].type}_${lstResp[i].name}.jpg`, lstResp[i].base64.replace('data:image/jpeg;base64,', ''), { base64: true });
        }
        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, "imasges.zip");
        console.log('DONE!');
    }

}