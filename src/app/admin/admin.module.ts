import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { SharedModule } from '../shared/shared.module';
import { ClassComponent } from './class/class.component';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    AdminComponent,
    TeacherComponent,
    CourseComponent,
    ClassComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppNgZorroAntdModule,
    SharedModule
  ],
  exports:[
    TeacherComponent,
    CourseComponent,
    ClassComponent
  ]
})
export class AdminModule { }
