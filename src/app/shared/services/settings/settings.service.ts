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

  addCountry(country:any){
    return this.HttpClient.post(this.utility.urlApi + '/country' , country);
  }

  addTeacher(teacher:any){
    return this.HttpClient.post(this.utility.urlApi + '/auth/register/teacher' , teacher);
  }

  addCourse(course:any){
    return this.HttpClient.post(this.utility.urlApi + '/course' , course);
  }

  addClass(classs:any){
    return this.HttpClient.post(this.utility.urlApi + '/class' , classs);
  }


}
