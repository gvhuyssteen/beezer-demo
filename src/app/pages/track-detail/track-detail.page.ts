import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeezerService } from 'src/app/services/beezer.service';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.page.html',
  styleUrls: ['./track-detail.page.scss'],
})
export class TrackDetailPage implements OnInit {

  trackTitle: string;
  trackId: number;
  artistId: number;
  albumId: number;

  album: any;
  top5Tracks: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute, private beezerService: BeezerService) { }

  ngOnInit() {
    this.trackTitle = this.activatedRoute.snapshot.paramMap.get('trackTitle');
    this.trackId = parseInt(this.activatedRoute.snapshot.paramMap.get('trackId'));
    this.artistId = parseInt(this.activatedRoute.snapshot.paramMap.get('artistId'));
    this.albumId = parseInt(this.activatedRoute.snapshot.paramMap.get('albumId'));

    this.beezerService.getAlbumById(this.albumId).subscribe((albumResult: any) => {
      this.album = albumResult;
    });

    this.beezerService.getArtistTopTracksById(this.artistId).subscribe((artistTopTracksResult: any) => {
      this.top5Tracks = artistTopTracksResult.data;
    });
  }

}
