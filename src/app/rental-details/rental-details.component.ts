import { Component, OnInit } from '@angular/core';
import { VideoService} from '../video.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { CustomerDataService } from '../customer-data.service';
import { Video } from '../Video';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css'],
  providers: [CustomerDataService, VideoService]
})

export class RentalDetailsComponent implements OnInit {

  video$: Object;
  customers$;
  videos: Video[];
  rent$: Object;

  constructor( private data: VideoService, private route: ActivatedRoute,
     private customer: CustomerDataService, private router: Router ) {
    this.route.params.subscribe( params => this.video$ = params.id);
   }

  ngOnInit() {
    this.data.getVideoInfo(this.video$).subscribe(
      data => {this.video$ = data;
      console.log(data);
    });
    this.customer.getUsers().subscribe(
      data => {
      this.customers$ = data;
      console.log(data);
    });
  }

  rentVid(video) {
    const _video = {
      _id: video._id,
      title: video.title,
      rating: video.rating,
      length: video.length,   
      genre: video.genre,
      status: 'false',
      director: video.director
    };
    this.data.rentVid(video).subscribe(data => {
      this.router.navigate(['/']);
     });
  }
}

