import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Track } from '../Track';
import { TrackService } from '../track.service';
import { Image } from '../Image';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  private tracks: Array<Track>;
  private track: Track;

  constructor(private trackservice: TrackService) {
    this.tracks = [];
  }
  imageName: string;
  images: Array<Image>;
  trackAll: Track;
  ngOnInit() {
     this.fetchTracks();

  }
    // recieveTrackname($event) {
    //   this.imageName = $event;
    // }
   private fetchTracks() {
     this.trackservice.getAddedTracks().subscribe((res: any) => {
        this.tracks = res;
        console.log(this.tracks);
     });
   }
   public updateTrack(track: any) {
    // const dialogRef = this.dialog.open(this.callAPIDialog);
    // dialogRef.afterClosed().subscribe(result => {
      // {
        // this.track.trackComment = this.trackComment;
        // this.trackName.emit(this.track);
        console.log(track);
    }

}
