import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/components/base.component';
import { SettingsService } from '../shared/services/settings/settings.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent extends BaseComponent implements OnInit {

  studentDetails :any
  constructor(
    injector :Injector,
    private settingsService :SettingsService
  ) { 
    super(injector)
  }

  ngOnInit(): void {
    let id = localStorage.getItem('id');
    if (this.isStudent) {
      this.getStudentDetails(id);
    }
  }

  getStudentDetails(id :any){
    this.settingsService.getStudentById(id).subscribe(res=>{
      this.studentDetails = res;
    });
  }
}
