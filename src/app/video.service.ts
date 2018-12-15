import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  constructor(private http: HttpClient) {
  }
  
  getVids() {
    return this.http.get('http://localhost:3000/api/video_route');
  }
  
  getVideoInfo(videoId) {
    return this.http.get('http://localhost:3000/api/video_route/' + videoId);
  }
  
  rentVid(video): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put('http://localhost:3000/api/video_route/' + video._id, JSON.stringify(video), httpOptions)
    .pipe(tap( rentVideo => console.log(`rent video = ${JSON.stringify(rentVideo)} `)));
  }
    
  updateVid(video): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put('http://localhost:3000/api/video_route/' + video._id, JSON.stringify(video), httpOptions)
    .pipe(tap( updateVideo => console.log(`updated video = ${JSON.stringify(updateVideo)} `)));
  }

  createVid(video): Observable<any>{
    console.log('create attempt');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:3000/api/video_route/', JSON.stringify(video), httpOptions)
    .pipe(tap( createVideo => console.log(`created video = ${JSON.stringify(createVideo)} `)));
  }

  deleteVid(video): Observable<any>{
    return this.http.delete('http://localhost:3000/api/video_route/' + video._id)
    .pipe(tap( deleteVideo => console.log(`deleted video = ${JSON.stringify(deleteVideo)} `)));
  }
}
    