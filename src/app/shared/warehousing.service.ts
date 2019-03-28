import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarehousingService {

 
  API_URL: string = 'https://5c925cdee7b1a00014078db3.mockapi.io/warehousing';
  constructor( public http: HttpClient) { }

  getAllWarehousings(){
      return this.http.get(this.API_URL);
  }
  // add(ban: Ban){
  //    return this.http.post(this.API_URL, ban);
  // }
  // update(ban: Ban){
  //    return this.http.put(`${this.API_URL}/${ban.id}`, ban);
  // }
  // delete(id: number){
  //   return this.http.delete(`${this.API_URL}/${id}`);
  // }

}
