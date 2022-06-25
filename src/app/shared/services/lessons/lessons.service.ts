import { Injectable, Injector } from '@angular/core';
import { BaseComponent } from '../../components/base.component';

@Injectable({
  providedIn: 'root'
})
export class LessonsService extends BaseComponent {

  constructor(
    injector : Injector
  ) { 
    super(injector);
  }

  getSessionUrl(classId:any){
    return this.HttpClient.get(this.utility.urlApi + `/get-url/${classId}`);
  }

  addCourse(course :any){
    return this.HttpClient.post(this.utility.urlApi + '/course' , course);
  }

  addClass(form :any){
    return this.HttpClient.post(this.utility.urlApi + '/class' , form);
  }

  addJitsiSession(jitsi:any){
    return this.HttpClient.post(this.utility.urlApi + '/jitsi-session' , jitsi);
  }

  getAllClassesByStudent(studentId :any){
    return this.HttpClient.get(this.utility.urlApi + `/class?studentId=${studentId}`);
  }

  getAllClassByTeacher(teacher_id :any){
    return this.HttpClient.get(this.utility.urlApi + `/class?teacherId=${teacher_id}`);
  }

  getAllClassByCourse(course_Id:any){
    return this.HttpClient.get(this.utility.urlApi + `/class?courseId=${course_Id}`);
  }


}
