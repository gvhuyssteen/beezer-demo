import { Component } from '@angular/core';
import { BeezerService } from '../../services/beezer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loading: boolean = false;
  searchQuery: string;
  tracks: Array<any> = [];
  nextTracks: string;
  previousTracks: string;

  constructor(private beezerService: BeezerService, private router: Router) {

  }

  public searchQueryChanged(url: string = "") {
    this.loading = true;
    if(this.searchQuery) {
      this.beezerService.queryTracks(this.searchQuery, url).subscribe((searchResult: any) => {
        this.tracks = searchResult.data;
        this.loading = false;

        if(searchResult.next) {
          this.nextTracks = searchResult.next;
        } else {
          this.nextTracks = null;
        }

        if(searchResult.prev) {
          this.previousTracks = searchResult.prev;
        } else {
          this.previousTracks = null;
        }
      });
    } else {
      this.tracks = [];
      this.loading = false;
    }
  }

  public getNextTracksAction() {
    this.searchQueryChanged(this.nextTracks);
  }

  public getPreviousTracksAction() {
    this.searchQueryChanged(this.previousTracks);
  }

  public openTrackAction(track: any) {
    this.router.navigate(['/track-detail', {
      trackId: track.id,
      albumId: track.album.id,
      artistId: track.artist.id,
      trackTitle: track.title
    }]);
  }

}
