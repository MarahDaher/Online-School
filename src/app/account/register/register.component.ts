import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  registerForm :FormGroup;
  loading = false
  constructor(
    injector: Injector,
    private _formBuilder: FormBuilder,

  ) { 
    super(injector);
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      dateBirth: ['', Validators.required],
      countryId: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    localStorage.removeItem('token')
  }

  submitform(form : any){
    this.loading = true
    this.utility.route.navigate(['/']);
  }

}
