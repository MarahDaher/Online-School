import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent extends BaseComponent implements OnInit {

  teacherForm :FormGroup;
  isLoadingOne = false;

  constructor(
    injector: Injector,
    private _formBuilder: FormBuilder,
    private settingsService : SettingsService

  ) { 
    super(injector);

    this.teacherForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


  submitForm(form :any){
    this.isLoadingOne = true;
    this.settingsService.addTeacher(form).subscribe(res =>{
      this.isLoadingOne = false;
      this.utility.notification.success('Teacher', 'Added Successfully !');
      this.teacherForm.reset();
    } , err =>{
      this.isLoadingOne = false;
      this.utility.notification.error('Teacher', 'Added Unsuccessfully !' , err.message);
    });
  }
}
