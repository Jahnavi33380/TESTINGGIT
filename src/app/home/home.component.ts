import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  todoItems:string[]=[];

  
  sendItem(item){
    //push item into array
    this.todoItems.push(item)
  }

  
  
    constructor(private tsObj:TestService){  }
  ngOnInit(): void
  {}
}
