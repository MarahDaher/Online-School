import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  registerForm :FormGroup;
  loading = false;

  constructor(
    injector: Injector,
    private _formBuilder: FormBuilder,
    private accountService : AccountService

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
    console.log(form);
    
    this.loading = true
    // this.utility.route.navigate(['/']);
    this.accountService.studentReister(form).subscribe(data => {
      console.log(data);
      
    })
  }

}
