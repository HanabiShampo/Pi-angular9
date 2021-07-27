import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AjoutEquipeService {
  private _getHeaders(): HttpHeaders {
    let header = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    return header;
}
  constructor(private http:HttpClient) { }
  getequipe():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/equipes')
  }
  addequipe1(data){
    let options = {
      headers: this._getHeaders()
  };
    return this.http.post('http://127.0.0.1:8000/api/equipes',data,options)
  }

  addequipe(equipe: object): Observable<object> {
     let options = {
      headers: this._getHeaders()
  };
    return this.http.post('http://127.0.0.1:8000/api/equipes',equipe,options)
      }
      getequipebyid(id: number): Observable<any> {
        let options = {
      headers: this._getHeaders()
  };
        return this.http.get(`http://127.0.0.1:8000/api/equipes/${id}`,options);
        }

        updateequipe(id: number, value: any): Observable<object> {
            let options = {
      headers: this._getHeaders()
  };
          return this.http.put(`http://127.0.0.1:8000/api/equipes/${id}`, value,options);
          }
          deleteequipe(id: number): Observable<any> {
            let options = {
              headers: this._getHeaders()
          };
            return this.http.delete(`http://127.0.0.1:8000/api/equipes/${id}`, options);
            }
}
