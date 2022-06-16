import { Injectable, Injector } from '@angular/core';
import { BaseComponent } from '../../components/base.component';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseComponent {

  constructor(
    injector : Injector
  ) { 
    super(injector);
  }

  studentReister(form:any){
    return this.HttpClient.post(this.utility.urlApi + '/auth/register' , form);
  }

  teacherRegister(form:any){
    return this.HttpClient.post(this.utility.urlApi + '/auth/register/teacher' , form);
  }

  login(form:any){
    return this.HttpClient.post(this.utility.urlApi + '/auth/login' , form);
  }

}
