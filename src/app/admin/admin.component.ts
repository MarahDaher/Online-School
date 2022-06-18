import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/components/base.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends BaseComponent implements OnInit {

  addTeaher :boolean = true;
  addCourse :boolean = false;
  addClass :boolean = false;
  addCountry :boolean = false;

  constructor(
    injector: Injector
  ) { 
    super(injector);
  }

  ngOnInit(): void {
  }

  AddTeacher(){
    this.addTeaher = true;
    this.addCourse = false;
    this.addClass = false;
    this.addCountry = false;
  }

  AddCourse(){
    this.addTeaher = false;
    this.addCourse = true;
    this.addClass = false;
    this.addCountry = false;
  }

  AddClaas(){
    this.addTeaher = false;
    this.addCourse = false;
    this.addClass = true;
    this.addCountry = false;
  }

  AddCountry(){
    this.addTeaher = false;
    this.addCourse = false;
    this.addClass = false;
    this.addCountry = true;
  }


  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('token');
    localStorage.removeItem('status');
    localStorage.removeItem('userName');

    this.utility.route.navigate(['/']);

  }

}
