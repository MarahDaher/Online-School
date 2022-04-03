import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { SharedModule } from '../shared/shared.module';
import { LessonsRoutingModule } from './lessons-routing.module';



@NgModule({
  declarations: [
    LessonsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LessonsRoutingModule
  ]
})
export class LessonsModule { }
