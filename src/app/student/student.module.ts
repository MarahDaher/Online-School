import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';


@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    AppNgZorroAntdModule
  ]
})
export class StudentModule { }
