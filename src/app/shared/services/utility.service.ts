import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';  
import { NzNotificationService } from 'ng-zorro-antd/notification';
 
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public route: Router;
  public translate: TranslateService;
  public textDir: any = 'rtl';
  public notification :NzNotificationService
  public urlApi = 'https://test-nest123.herokuapp.com';
  // public urlApi = 'http://localhost:3000';

  public isStudent :Boolean = false;
  public isTeacher :Boolean = false;;

  public isLogin:Boolean = false;
  constructor(
    injector: Injector
    ) {
    this.route = injector.get(Router);
    this.translate = injector.get(TranslateService);
    this.notification = injector.get(NzNotificationService);


    this.translate.setDefaultLang('ar');
    this.translate.onLangChange.subscribe((event) =>
    {      
      if(event?.lang == 'ar')
      {
        this.textDir = 'rtl';
      } 
      else
      {
        this.textDir = 'ltr';
      }
    });
  }
  
  public navigate(url: string) {
    this.route.navigate([url]);
  }


  changeLang(language: string) {
    this.translate.use(language);
  }

  getToken(){
    let token = localStorage.getItem('token');
    this.isLogin = token ? true : false
  }

  getStatus(){
    let status = localStorage.getItem('status')
    if (status == 'student') {
      this.isStudent = true;
      this.isTeacher = false;
    } 
    else {
      this.isStudent = false;
      this.isTeacher = true;
    } 
  }

}
