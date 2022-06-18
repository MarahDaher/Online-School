import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private jwt: JwtHelperService) { }

  public getToken(): any {    
    return localStorage.getItem('token');
  }

  public setToken(token: any) {
    localStorage.setItem('token', token);
  }

  public setUserName(user: any) {
    localStorage.setItem('userName', user);
  }

  public setUserStatus(status: any , id:any) {    
    if (status == 1) {
      localStorage.setItem('status', 'teacher');

    } else {
      localStorage.setItem('status', 'student');
    }
    localStorage.setItem('id', id);

  }

  isLoggedIn(): boolean {
    return false;
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return this.jwt.isTokenExpired(token);
  }


  isStudent() {
    const token = this.getToken();
    let role = this.jwt.decodeToken(token);
    let status = localStorage.getItem('status');
    if (status == 'student') {
        return status;
    }
    return;
  }

  isTeacher() {
    const token = this.getToken();
    let role = this.jwt.decodeToken(token);
    let status = localStorage.getItem('status');
    if (status == 'teacher') {
        return status;
    }
    return;
  }

}
