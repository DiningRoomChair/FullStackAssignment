import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  user$: Object;
  users$: Object;
  users: User[];

  constructor(private route: ActivatedRoute, private router: Router, 
    private customerservice: CustomerService) { }

  ngOnInit() {
    this.customerservice.getUsers().subscribe(data => this.users$ = data)
  }

}
