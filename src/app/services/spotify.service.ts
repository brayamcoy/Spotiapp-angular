import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: any;

  constructor(private http: HttpClient){
    console.log('Servicio listo');
  }

  getToken(): any {
    // tslint:disable-next-line: prefer-const
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const url = 'https://spoti-app-token.herokuapp.com/spotify/6d60c2efa59b45bfbfcd1507ea51b011/6ab5659a15e44342804d79790d56e0a4';
    return this.http.get(url, {headers});
  }

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get(url, {headers});
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map((data: any) => data.albums.items));
  }
  getArtists(term: string): any {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
               .pipe( map( (data: any) => data.artists.items));
  }
  getArtist(id: string): any {
    return this.getQuery(`artists/${id}`);
  }
  getTopTracks(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               // tslint:disable-next-line: no-string-literal
               .pipe(map( data => data['tracks']));
  }
}
