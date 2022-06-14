import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './student-lesson/lesson.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'student-lesson',
    component: LessonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
