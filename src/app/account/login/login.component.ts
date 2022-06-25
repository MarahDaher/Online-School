import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  extends BaseComponent implements OnInit {

  loginForm :FormGroup;
  loading = false
  constructor(
    injector :Injector,
    private _formBuilder: FormBuilder,
    private accountService : AccountService

  ) { 
    super(injector);
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('token');
    localStorage.removeItem('status');
    localStorage.removeItem('userName');
    localStorage.removeItem('id');

  }

  submitform(form : any){
    this.loading = true
    this.accountService.login(form).subscribe(( res:any)=>{            
      this.AuthService.setToken(res?.token);
      this.AuthService.setUserName(form?.email);
      this.AuthService.setUserStatus(res?.status , res);      
      this.utility.route.navigate(['/lessons']);
      this.loading = false
    },()=>{
      this.utility.notification.error('Login','userName or Password error')
      this.loading = false
    })
  }

}