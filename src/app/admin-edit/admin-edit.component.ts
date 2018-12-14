import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { VideoService } from '../video.service';
import { Video } from '../Video';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  video$: Object;
  videos: Video[];

  constructor(private route: ActivatedRoute, private router: Router,
    private videoservice: VideoService) {
      this.route.params.subscribe(params => this.video$ = params.id);
    }

  ngOnInit() {
    this.videoservice.getVideoInfo(this.video$).subscribe(
      data => this.video$ = data
    );
  }

  editVideo(video, event){
    console.log('edit')
    var tar = event.target;
    console.log(event.tar.querySelector('#director'));
    const updatedVideo = {
      _id: video._id,
      title: tar.querySelector('#title').value,
      rating: tar.querySelector('#rating').value,
      length: tar.querySelector('#length').value,   
      genre: tar.querySelector('#genre').value,
      status: tar.querySelector('#status').value,
      director: tar.querySelector('#director').value,
    };
    this.videoservice.updateVid(updatedVideo).subscribe(data => {console.log('edit')});
    this.router.navigate(['/admin-view']);
  }

}
