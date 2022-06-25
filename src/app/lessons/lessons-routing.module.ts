import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { LessonComponent } from '../student/student-lesson/lesson.component';
import { LessonsComponent } from './lessons.component';


const routes: Routes = [
  {
    path: '',
    component: LessonsComponent
  },
  {
    path: 'lesson-details/:id',
    component: LessonDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule { }
