import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeezerService {

  baseUrl = environment.services.beezerBaseApiUrl;

  constructor(private http: HttpClient) { }

  public queryTracks(q: string, nextOrPreviousUrl: string = "") {
    let url = this.baseUrl + 'search?q=track:"'+q+'"';
    if(nextOrPreviousUrl) {
      url = nextOrPreviousUrl
    }
    return this.http.get(url);
  }

  public getAlbumById(id: number) {
    let url = this.baseUrl + 'album/'+id;
    return this.http.get(url);
  }

  public getArtistTopTracksById(id: number, limit: number = 5) {
    let url = this.baseUrl + 'artist/'+id+'/top?limit='+limit;
    return this.http.get(url);
  }
}
