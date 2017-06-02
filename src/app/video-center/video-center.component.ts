import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import { VideoService } from './../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  constructor(private _videoService: VideoService) { }



  videos: Array<Video>;

  ngOnInit() {
    this._videoService.getVideos()
    .subscribe(resVideoData => this.videos = resVideoData);
  }

  selectedVideo: Video;

onSelectVideo(video: any){
  this.selectedVideo = video;
  console.log(this.selectedVideo);
}


}
