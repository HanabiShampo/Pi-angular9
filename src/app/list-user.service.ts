import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  private _getHeaders(): HttpHeaders {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return header;
  }
  constructor(private http:HttpClient) { }
  getuser():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/users')
  }
  adduser(data){
    let options = {
      headers: this._getHeaders()
    };
    return this.http.post('http://127.0.0.1:8000/api/users',data,options)
  }
  deleteuser(id)
  {

    let options = {
      headers: this._getHeaders()
    };
    console.log("here id sup",id)
    return this.http.delete("http://127.0.0.1:8000/api/users/"+id)
  }


  updateuser(id,data)
  {
    let options = {
      headers: this._getHeaders()
    };
    console.log("here id sup",id)
    return this.http.put("http://127.0.0.1:8000/api/users/"+id,data)
  }




  getUsrById(id)
  {
    let options = {
      headers: this._getHeaders()
    };
    console.log("here id sup",id)
    return this.http.get("http://127.0.0.1:8000/api/users/"+id)
  }

}
