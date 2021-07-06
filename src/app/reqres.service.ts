import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Reqres} from '../app/models/reqres.models'

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private hc:HttpClient) { }
  getReqres():Observable<Reqres[]>{
    return this.hc.get<Reqres[]>('https://reqres.in/api/unknown')
  }
}
