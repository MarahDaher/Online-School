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
}
