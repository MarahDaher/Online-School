import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { TeacherComponent } from './teacher.component';


@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    AppNgZorroAntdModule
  ]
})
export class TeacherModule { }
