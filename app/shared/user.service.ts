import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public data: Data[];
  readonly  rootUrl = " https://mobsev.knowledgesociety.tech:9360/";
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User={
      username: user.username,
      invitedbycode: user.invitedbycode,
      password: user.password,
      email: user.email,
      mobile: user.mobile,
      rolename: user.rolename,
      confirmpassword: user.confirmpassword,
      roleid: user.roleid,
    }
    
    return this.http.post(this.rootUrl + 'userregister', body);
  }
}
