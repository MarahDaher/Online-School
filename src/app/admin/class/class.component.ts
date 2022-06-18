import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent  extends BaseComponent implements OnInit {

  classForm :FormGroup;
  isLoadingOne = false;
  
  constructor(
    injector: Injector,
    private _formBuilder: FormBuilder,
    private settingsService : SettingsService
  ) { 
    super(injector);
    this.classForm = this._formBuilder.group({
      code: ['', [Validators.required]],
      subjects: ['', [Validators.required]],
      price: ['', [Validators.required]],
      maxStudent: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
      teacherId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      sessionNumber: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  submitForm(form :any){

    console.log(form);
    
    // this.isLoadingOne = true;
    // this.settingsService.addClass(form).subscribe(res =>{
    //   this.isLoadingOne = false;
    //   this.utility.notification.success('Class', 'Added Successfully !');
    //   this.classForm.reset();
    // } , err =>{
    //   this.isLoadingOne = false;
    //   this.utility.notification.error('Class', 'Added Unsuccessfully !' , err.message);
    // });
  }

}

