import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/components/base.component';
import { SettingsService } from '../shared/services/settings/settings.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent extends BaseComponent implements OnInit {

  allCourses :any;
  constructor(
    injector: Injector,
    private settingsService:SettingsService 
  ) { 
    super(injector);
  }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(){
    this.settingsService.getAllCourses().subscribe(res=>{
      this.allCourses = res;
      console.log(this.allCourses);
    })
  }

}
