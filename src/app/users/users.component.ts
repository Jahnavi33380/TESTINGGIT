import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private router : Router,private fsObj : FakedataService) { }

  mySubscription : any;
  ngOnInit(): void {
    this.mySubscription = this.fsObj.getUsers().subscribe(
      userData => {
        this.users = userData;
        console.log(this.users);
      },
      err => {
        console.log("Error in Users Data",err);
      }
    )
  }
   onSelectId(name) {
    this.router.navigateByUrl("users/" + name);
   }
   ngOnDestroy() {
     this.mySubscription.unsubscribe();
   }

}
