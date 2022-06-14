import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../components/base.component';

@Injectable({
  providedIn: 'root'
})
export class ProxyService extends BaseComponent {
  
  constructor(injector: Injector) { super(injector) }
    url='https://test-nest123.herokuapp.com/';

  login(input:any):Observable<any> {
    return this.HttpClient.post(this.url+"auth/login",input);
  }
}
