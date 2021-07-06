import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FakedataService {
  
  constructor(private hc:HttpClient) { }
  getUsers():Observable<any>{
    return this.hc.get<any>("http://localhost:3000/users/");
  }
  getUsersData(name):Observable<any>{
    return this.hc.get<any>("http://localhost:3000/users/" + name);
  }
}





