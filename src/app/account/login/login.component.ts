import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProxyService } from 'src/app/proxy/proxy.service';
import { BaseComponent } from 'src/app/shared/components/base.component';

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
    private proxyService:ProxyService
  ) { 
    super(injector);
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    localStorage.removeItem('token')
  }

  submitform(form : any){
    this.loading = true
    this.proxyService.login(form).subscribe(res=>{
      this.AuthService.setToken(res.token)
      this.AuthService.setUserName(form.email)
     // this.utility.route.navigate(['/']);
      console.log(this.AuthService.isOwner())
      this.loading = false
    },()=>{
      this.utility.notification.error('Login','userName or Password error')
      this.loading = false
    })
  }

}