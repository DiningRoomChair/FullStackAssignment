import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Video } from '../Video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  video$: Object;
  videos: Video[];

  constructor(private route: ActivatedRoute, private router: Router,
    private videoservice: VideoService) {
      this.route.params.subscribe(params => this.video$ = params.id);
    }

  ngOnInit() {
  }

  addVideo(event){
    console.log('create');
    const tar = event.target;
    const newVideo = {
      title: tar.querySelector('#title').value,
      rating: tar.querySelector('#rating').value,
      length: tar.querySelector('#length').value,
      genre: tar.querySelector('#genre').value,
      status: tar.querySelector('#status').value,
      director: tar.querySelector('#director').value
    };
    this.videoservice.createVid(newVideo).subscribe(videoservice => {console.log('create function called'); })
    this.router.navigate(['/admin-view'])
  }

}
