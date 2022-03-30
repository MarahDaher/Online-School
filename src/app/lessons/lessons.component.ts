import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/components/base.component';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent extends BaseComponent implements OnInit {

  constructor(
    injector: Injector
  ) { 
    super(injector);
  }

  ngOnInit(): void {
  }

}
