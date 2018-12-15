import { Component, OnInit, SimpleChange } from '@angular/core';
import { VideoService } from '../video.service';
import { Router } from '@angular/router';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  videos$: Object;

  constructor(private router: Router,private videoservice: VideoService) { }

  ngOnInit() {
    this.videoservice.getVids().subscribe(videoservice => this.videos$ = videoservice)
  }

  deleteVid(video){
    this.videoservice.deleteVid(video).subscribe(videoservice => {});
    this.ngOnInit();
  }

}
