import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/components/main/main.component';
import { AuthGuard } from './shared/proxy/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
      },
      {
        path: 'lessons',
        loadChildren: () => import('./lessons/lessons.module').then(m => m.LessonsModule),
      },
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
      },
      {
        path: 'teacher/:id',
        loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
      },
    ]
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
