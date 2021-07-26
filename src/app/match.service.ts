import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { equipe } from './model/equipe';
import { match } from './model/match';
@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private _getHeaders(): HttpHeaders {
    let header = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return header;
  }
  constructor(private http:HttpClient) { }
  getmatch():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/matcches')
  }
  getmatchbyid(id: number): Observable<any> {
    let options = {
  headers: this._getHeaders()
};
    return this.http.get(`http://127.0.0.1:8000/api/matcches/${id}`,options);
    }
  updatematch(id: number, value: any): Observable<object> {
    let options = {
headers: this._getHeaders()
};
  return this.http.put(`http://127.0.0.1:8000/api/matcches/${id}`, value,options);
  }
  deletematch(id: number): Observable<any> {
    let options = {
      headers: this._getHeaders()
  };
    return this.http.delete(`http://127.0.0.1:8000/api/matcches/${id}`, options);
    }
    addmatch(Match: object): Observable<object> {
     let options = {
      headers: this._getHeaders()
  };
    return this.http.post('http://127.0.0.1:8000/api/matcches',Match,options)
      }

      searchByres():Observable<any>{
      
        return this.http.get('http://127.0.0.1:8000/api/matcches?res=a');
        }

        searchByb():Observable<any>{
      
          return this.http.get('http://127.0.0.1:8000/api/matcches?res=b');
          }
          searchByress(equipe){
            return this.http.get<match>('http://127.0.0.1:8000/api/matcches?res='+equipe);
            }
}
