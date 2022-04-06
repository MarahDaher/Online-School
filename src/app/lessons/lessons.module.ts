import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { SharedModule } from '../shared/shared.module';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';



@NgModule({
  declarations: [
    LessonsComponent,
    LessonDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LessonsRoutingModule
  ],
  exports:[
    LessonDetailsComponent
  ]
})
export class LessonsModule { }
