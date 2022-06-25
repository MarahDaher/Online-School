import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { LessonsService } from 'src/app/shared/services/lessons/lessons.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent extends BaseComponent implements OnInit {

  @Input() selectedClass :any;

  sessionForm :FormGroup;
  isLoadingOne = false;

  constructor(
    injetor : Injector,
    private _formBuilder: FormBuilder,
    private modal: NzModalRef,
    private lessonsService :LessonsService
  ) { 
    super(injetor);

    this.sessionForm = this._formBuilder.group({
      classId: ['', [Validators.required]],
      teacherId: ['', [Validators.required]],
      roomName: ['', [Validators.required]],
      password : ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log(this.selectedClass);
    var randomstring = Math.random().toString(36).slice(-8);
    if (this.selectedClass) {
      let teacher_id = localStorage.getItem('userId')
      this.sessionForm.get('teacherId')?.setValue(teacher_id);
      this.sessionForm.get('classId')?.setValue(this.selectedClass?.id);
      this.sessionForm.get('roomName')?.setValue(this.selectedClass?.code);
      this.sessionForm.get('password')?.setValue(randomstring);
    }
  }


  handleCancel(): void {
    this.modal.close();
  }

  submitForm(form: any){
    this.isLoadingOne = true;   
    this.lessonsService.addJitsiSession(form).subscribe((res: any) => {
      this.isLoadingOne = false;
      this.utility.notification.success('Session', 'Add Successfully');
      this.utility.navigate('/teacher/'+res.id)
      this.modal.close(form); 
    }, (error: any) => {
        this.utility.notification.error('Session', error);
        this.isLoadingOne = false;
    });
  }

}
