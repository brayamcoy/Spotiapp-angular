import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'safedom'
})
export class SafedomPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ){
   }
  transform( value: string, url: string): any {
    url = 'https://open.spotify.com/embed?uri=';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
