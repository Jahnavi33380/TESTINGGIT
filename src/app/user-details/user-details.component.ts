import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userObj;
  constructor(private ar : ActivatedRoute,private fs: FakedataService) { }

  ngOnInit(): void {
    //get id from url
    let id = this.ar.snapshot.params.id;
   
    //get data of users with this current id  
    this.fs.getUsersData(id).subscribe(
      obj => {
        this.userObj = obj;
      }, 
      err => {
        console.log("error in user data",err);
      }
    )

  }

}

