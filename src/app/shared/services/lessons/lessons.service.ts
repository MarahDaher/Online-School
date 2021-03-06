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

  addCourse(course :any){
    return this.HttpClient.post(this.utility.urlApi + '/course' , course);
  }

  addClass(form :any){
    return this.HttpClient.post(this.utility.urlApi + '/class' , form);
  }

  addJitsiSession(jitsi:any){
    return this.HttpClient.post(this.utility.urlApi + '/jitsi-session' , jitsi);
  }
  getJitsiSession(id:any){
    return this.HttpClient.get(this.utility.urlApi + '/jitsi-session/'+id);
  }
  getJitsiUrl(classId:any){
    return this.HttpClient.get(this.utility.urlApi + '/jitsi-session/get-url/'+classId);
  }
  getAllClassesByStudent(studentId :any){
    return this.HttpClient.get(this.utility.urlApi + `/class?studentId=${studentId}`);
  }

  getAllClassByTeacher(teacher_id :any , course_id :any){
    return this.HttpClient.get(this.utility.urlApi + `/class?teacherId=${teacher_id}&courseId=${course_id}`);
  }

  getAllClassByCourse(course_Id:any){
    return this.HttpClient.get(this.utility.urlApi + `/class?courseId=${course_Id}`);
  }


}
