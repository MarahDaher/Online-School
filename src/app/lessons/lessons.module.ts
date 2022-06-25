import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { SharedModule } from '../shared/shared.module';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { AddSessionComponent } from './lesson-details/add-session/add-session.component';
import { RegisterClassComponent } from './lesson-details/register-class/register-class.component';

@NgModule({
  declarations: [
    LessonsComponent,
    LessonDetailsComponent,
    AddSessionComponent,
    RegisterClassComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    LessonsRoutingModule
  ],
  exports:[
    LessonDetailsComponent,
    AddSessionComponent
  ]
})
export class LessonsModule { }
