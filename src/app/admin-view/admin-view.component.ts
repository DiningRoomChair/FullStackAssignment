import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  videos$: Object;

  constructor(private videoservice: VideoService) { }

  ngOnInit() {
    this.videoservice.getVids().subscribe(videoservice => this.videos$ = videoservice)
  }

}
