import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { LessonComponent } from './student-lesson/lesson.component';


@NgModule({
  declarations: [
    StudentComponent,
    LessonComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    AppNgZorroAntdModule
  ],
  exports: [
    LessonComponent
  ]
})
export class StudentModule { }
