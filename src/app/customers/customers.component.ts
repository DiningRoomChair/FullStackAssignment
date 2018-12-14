import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Customer } from '../Customer';
import { CustomerDataService } from '../customer-data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  user$: Object;
  users$: Object;

  constructor(private data: CustomerDataService, private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => this.user$ = params.id);
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => this.users$ = data)
  }

}
