import { Component, OnInit, Input, Output, EventEmitter, ElementRef, TemplateRef } from '@angular/core';
import { Track } from '../Track';
import { Image } from '../Image';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  trackComment: string;
  @Input()
  track: Track;
  tracks: Track;
  trackSingle = new Track;
  @Input()
  imageName: string;
  @Input()
  imageUrl: Image;
  @Output() trackNameEvent = new EventEmitter();
  @Output() trackName = new EventEmitter();
  constructor(private trackservice: TrackService) { }

  ngOnInit() {
    this.trackservice.getAddedTracks().subscribe((data: any) => {
      this.tracks = data;
      console.log(this.tracks);
    });
  }
  sendTrackname() {
    this.trackNameEvent.emit(this.track);
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

