import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.scss']
})
export class LessonDetailsComponent extends BaseComponent implements OnInit {

  constructor(
    injector: Injector
  ) {
    super(injector);
   }

  ngOnInit(): void {
  }

}
