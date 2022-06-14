import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IframeService {
  iframe :any;

  constructor() { }
   setIframe(value :any){
    this.iframe = value
  }
  
  get getIframe(){
    return this.iframe
  }
}
