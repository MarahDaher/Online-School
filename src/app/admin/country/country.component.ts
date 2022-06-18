import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent extends BaseComponent implements OnInit {

  countryForm :FormGroup;
  isLoadingOne = false;
  
  constructor(
    injector: Injector,
    private _formBuilder: FormBuilder,
    private settingsService : SettingsService
  ) { 
    super(injector);
    this.countryForm = this._formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  submitForm(form :any){
    this.isLoadingOne = true;
    this.settingsService.addCountry(form).subscribe(res =>{
      this.isLoadingOne = false;
      this.utility.notification.success('Country', 'Added Successfully !');
      this.countryForm.reset();
    } , err =>{
      this.isLoadingOne = false;
      this.utility.notification.error('Country', 'Added Unsuccessfully !' , err.message);
    });
  }
}
