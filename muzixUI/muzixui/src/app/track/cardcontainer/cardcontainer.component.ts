import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Image } from '../Image';
import { Track } from '../Track';

@Component({
  selector: 'app-cardcontainer',
  templateUrl: './cardcontainer.component.html',
  styleUrls: ['./cardcontainer.component.css']
})
export class CardcontainerComponent implements OnInit {
  // public tracklist = [];
  // public trackName: string;
  // public imageUrl: string;

  images: Array<Image>;
  constructor(private trackservice: TrackService) { }

  ngOnInit() {
    // this.trackservice.getTrackDetails().subscribe(((data: any) => this.track = data));
    // console.log(this.track);
    // this.trackservice.getTrackDetails().subscribe(data => this.track = data);
    // console.log(this.track);

    this.trackservice.getTrackDetails().subscribe((data: any) => {
      this.images = data.tracks.track;
      console.log(this.images);
    });
  }

  addTrack(track) {
    const newTrack = new Track();
    newTrack.trackId = track['image'][2]['#text'];
    newTrack.trackName = track.name;
    newTrack.trackComment = 'Added Track';
    this.trackservice.addTracktoWishList(newTrack).subscribe((res: any) => {console.log(res);
    });
   }
}
