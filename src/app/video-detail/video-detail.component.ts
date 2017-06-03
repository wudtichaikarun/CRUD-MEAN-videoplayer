import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {
 video: any;
 private editTitle: boolean = false;
 private updateVideoEvent = new EventEmitter();
 private deleteVideoEvent = new EventEmitter();
 constructor() { }

  ngOnInit() {
  }

  ngOnChange(){
    this.editTitle = false;
  }

onTitleClick(){
  this.editTitle = true
}

//onblur title
onMouseout(){
  this.editTitle = false;
  console.log('event mouseout working');
}

updateVideo(){
  this.updateVideoEvent.emit(this.video);
}

deleteVideo(){
  this.deleteVideoEvent.emit(this.video);
}

}
