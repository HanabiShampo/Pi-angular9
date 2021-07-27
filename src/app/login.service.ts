import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {user} from './model/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class APIService {
  private currentUserSubject: BehaviorSubject<user>;
  public currentUser: Observable<user>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<user>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public getcurrentUserValue(): user {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.get<user>('http://127.0.0.1:8000/connexion/'+email+'/'+password)
     /* .pipe(map(user => {


          //           user.authdata = window.btoa(email + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );*/


  }




  loggedIn() {
    return !!localStorage.getItem('connected_user');
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
