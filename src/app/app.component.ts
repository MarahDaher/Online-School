import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from './shared/components/base.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit{

  constructor(
    injector: Injector
  ){
    super(injector);
  }
  ngOnInit() { }
}  