import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent{

    artists: any[] = [];
    loading: boolean;
  constructor(private spotify: SpotifyService){
  }
  search(term: string): any {
    this.loading = true;
    console.log(term);
    this.spotify.getToken()
    .subscribe( (data: any) => {
      // tslint:disable-next-line: no-string-literal
      this.spotify.token = data['access_token'];
      this.spotify.getArtists(term)
                .subscribe( (dataService: any) => {
                console.log(dataService);
                this.artists = dataService;
                this.loading = false;
                });
    });
  }

}
