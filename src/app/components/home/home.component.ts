import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getToken()
    .subscribe( (data: any) => {
      // tslint:disable-next-line: no-string-literal
      this.spotify.token = data['access_token'];
      this.spotify.getNewReleases()
                .subscribe( (dataService: any) => {
                                console.log(dataService);
                                this.newSongs = dataService;
                                this.loading = false;
                              }, (errorService) => {
                                  console.log(errorService);
                                  this.error = true;
                                  this.loading = false;
                                  this.messageError = errorService.error.error.message;
                              });
    });
  }
}
