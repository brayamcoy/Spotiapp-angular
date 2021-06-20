import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent{

  artist: any = {};
  loadingArtist: boolean;
  topTracks: any = {};
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe( params => {
        // tslint:disable-next-line: no-string-literal
        this.getArtist(params['id']);
        // tslint:disable-next-line: no-string-literal
        this.getTopTrack(params['id']);
    });
   }
  getArtist(id: string): any{
    this.loadingArtist = true;
    this.spotify.getArtist(id)
                .subscribe( data => {
                  console.log(data);
                  this.artist = data;
                  this.loadingArtist = false;
                });
  }

  getTopTrack(id: string): any{
    this.spotify.getTopTracks(id)
                .subscribe( data => {
                  console.log(data);
                  this.topTracks = data;
                });
  }


}
