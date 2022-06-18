import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent extends BaseComponent implements OnInit {

  courseForm :FormGroup;
  isLoadingOne = false;
  
  constructor(
    injector: Injector,
    private _formBuilder: FormBuilder,
    private settingsService : SettingsService
  ) { 
    super(injector);
    this.courseForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submitForm(form :any){
    this.isLoadingOne = true;
    this.settingsService.addCourse(form).subscribe(res =>{
      this.isLoadingOne = false;
      this.utility.notification.success('Course', 'Added Successfully !');
      this.courseForm.reset();
    } , err =>{
      this.isLoadingOne = false;
      this.utility.notification.error('Course', 'Added Unsuccessfully !' , err.message);
    });
  }

}
