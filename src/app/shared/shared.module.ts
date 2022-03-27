import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppNgZorroAntdModule,
    TranslateModule.forChild({}),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
