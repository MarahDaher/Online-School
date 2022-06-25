import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { LessonsService } from 'src/app/shared/services/lessons/lessons.service';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';
import { AddSessionComponent } from './add-session/add-session.component';
import { RegisterClassComponent } from './register-class/register-class.component';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.scss']
})
export class LessonDetailsComponent extends BaseComponent implements OnInit {

  allClasses :any = [];
  courseDetails : any;

  constructor(
    injector: Injector,
    private viewContainerRef: ViewContainerRef,
    public modal: NzModalService,
    private settingsService : SettingsService ,
    private lessonsService : LessonsService,
    private route :ActivatedRoute
  ) {
    super(injector);
   }

  ngOnInit(): void {
    let id = localStorage.getItem('id');
    let course_Id = this.route.snapshot.params.id;
  
    if (this.isTeacher) {
      this.getAllClassByTeacher(id)
    }
    if (this.isStudent) {
      this.getAllClassByCourse(course_Id);
    }
  }


  AddSession(classForm:any){
    const modal = this.modal.create({
      nzTitle: 'إضافـــة درس',
      nzContent: AddSessionComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzDirection: "rtl",
      nzWidth: '600px',
      nzComponentParams: {
        selectedClass : classForm
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    });

    modal.afterClose.subscribe(result => {
      if (result) {
        console.log(result);
        
      }
    });
  }

  getAllClassByCourse(course_id:any){
    this.allClasses = [];
    this.lessonsService.getAllClassByCourse(course_id).subscribe((res :any)=>{
      this.allClasses = res;     
      console.log(this.allClasses);
       
    });
  }

  getAllClassByTeacher(teacher_id:any){
    this.allClasses = [];
    this.lessonsService.getAllClassByTeacher(teacher_id).subscribe(res=>{
      this.allClasses = res;     
    });
  }

  getAllClassesByStudent(student_id:any){
    this.allClasses = [];
    this.lessonsService.getAllClassesByStudent(student_id).subscribe(res=>{
      this.allClasses = res;     
    });
  }

  getAllClasses(){
    this.allClasses = [];
    this.settingsService.getAllClass().subscribe(res=>{
      this.allClasses = res;     
    });
  }

  registerClass(){
    const modal = this.modal.create({
      nzTitle: 'تسجيـــل',
      nzContent: RegisterClassComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzDirection: "rtl",
      nzWidth: '600px',
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    });

    modal.afterClose.subscribe(result => {
      if (result) {
        console.log(result);
        
      }
    });
  }
}
