import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';  

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public route: Router;
  public translate: TranslateService;
  public textDir: string = 'ltr';


  constructor(
    injector: Injector
    ) {
    this.route = injector.get(Router);
    this.translate = injector.get(TranslateService);


    this.translate.setDefaultLang('en');
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

}
