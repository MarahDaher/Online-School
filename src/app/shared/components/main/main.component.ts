import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {

  // isStudent :Boolean = false;
  // isTeacher :Boolean = false;;

  // isLogin:Boolean = false;

  constructor(
    injector: Injector,
    // private scroll: ViewportScroller
  ) {
    super(injector);
  }

  ngOnInit(): void {

    // this.getToken();
    // this.getStatus();
  }

  // getToken(){
  //   let token = localStorage.getItem('token');
  //   this.isLogin = token ? true : false
  // }

  // getStatus(){
  //   let status = localStorage.getItem('status')
  //   if (status == 'student') {
  //     this.isStudent = true;
  //     this.isTeacher = false;
  //   } 
  //   else {
  //     this.isStudent = false;
  //     this.isTeacher = true;
  //   } 
  // }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('token')
    localStorage.removeItem('status')
    localStorage.removeItem('userName');
    localStorage.removeItem('userId')
    this.utility.route.navigate(['/']);

  }
}
