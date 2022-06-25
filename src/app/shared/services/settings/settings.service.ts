import { Injectable, Injector } from '@angular/core';
import { BaseComponent } from '../../components/base.component';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends BaseComponent {

  constructor(
    injector : Injector
  ) { 
    super(injector);
  }

  // Country
  getAllCountry(){
    return this.HttpClient.get(this.utility.urlApi + '/country');
  }

  addCountry(country:any){
    return this.HttpClient.post(this.utility.urlApi + '/country' , country);
  }

  addTeacher(teacher:any){
    return this.HttpClient.post(this.utility.urlApi + '/auth/register/teacher' , teacher);
  }


  //Course
  getAllCourses(){
    return this.HttpClient.get(this.utility.urlApi + `/course`);
  }

  addCourse(course:any){
    return this.HttpClient.post(this.utility.urlApi + '/course' , course);
  }

  //Course
  getAllClass(){
    return this.HttpClient.get(this.utility.urlApi + `/class`);
  }

  addClass(classs:any){
    return this.HttpClient.post(this.utility.urlApi + '/class' , classs);
  }

  //student 
  getStudentById(id:any){
    return this.HttpClient.get(this.utility.urlApi + `/student/${id}`);
  }

}
