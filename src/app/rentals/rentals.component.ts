import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({ 
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css'],
  providers: [VideoService]
})
export class RentalsComponent implements OnInit {

  videos$: Object;

  constructor(private videoservice: VideoService) { }

  ngOnInit() {
    this.videoservice.getVids().subscribe(videoservice => {this.videos$ = videoservice})
  }
}
