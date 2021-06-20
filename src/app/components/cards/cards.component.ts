import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {

  @Input() items: any[] = [];
  constructor(private router: Router) { }

  viewArtist(item: any): any{
    // tslint:disable-next-line: prefer-const
    let artistId: any;
    console.log(item);
    if (item.type === 'artist'){
      artistId = item.id;
    }else{
      artistId = item.artists[0].id;
    }
    console.log(artistId);
    this.router.navigate(['/artist', artistId]);
  }

}
