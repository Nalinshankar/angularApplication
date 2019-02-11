import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from './Track';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  url: string;
  constructor(private http: HttpClient) {
    // tslint:disable-next-line:max-line-length
    this.url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=97f6b10ce41c2568342877b1fdfcd9e5&format=json&limit=10';
   }
    getTrackDetails() {
     return this.http.get(this.url);
   }

   addTracktoWishList(track: Track) {
    console.log(track);
    return this.http
      .post('http://localhost:8090/api/v1' + '/track', track, { observe: 'response' });
      // .pipe(catchError(this.handleError));
  }
  getAddedTracks() {
    return this.http.get('http://localhost:8090/api/v1' + '/tracks');
  }

  // getTracks() {
  //     return this.http.get(this.url);
  // }
 updateAddedTrack() {

 }
}
