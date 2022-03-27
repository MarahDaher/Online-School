import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {

  constructor(
    injector: Injector,
    // private scroll: ViewportScroller
  ) {
    super(injector);
  }
  ngOnInit(): void {
  }

}
