import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import {Video} from './video';

@Injectable()
export class VideoService {

  constructor(private _http: Http) { }
  
  // READ video
  getVideos(){
    return this._http.get('/videos')
    .map((response: Response) => response.json());
  }

  // CREATE video
  addVideo(video: Video){
    const options:RequestOptionsArgs = {
      headers: new Headers({'Content-Type': 'application/json'})
    }
    return this._http.post('/videos', JSON.stringify(video), options)
    .map((response: Response) => response.json());
  }

  // UPDATE video 
  updateVideo(video: Video){
   const options:RequestOptionsArgs = {
      headers: new Headers({'Content-Type': 'application/json'})
    }
    return this._http.put(`videos/${video._id}`, JSON.stringify(video), options)
    .map((response: Response) => response.json());
  }

  // DELETE video
  deleteVideo(video: Video){
    return this._http.delete(`videos/${video._id}`)
    .map((response: Response) => response.json());
  }

}
