import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services';
import { AuthSession } from '../../share';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  constructor(
    private _loginService: LoginService,
    private _authSession: AuthSession,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._authSession.setSession = undefined;
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';  
  }

  onSubmit(f){

    this._loginService.identify(f.value.username, f.value.password)
    .subscribe(resp => {
      this._authSession.setSession = resp;

      if (this.returnUrl == '/')
      {
        this._router.navigateByUrl('/orders');
      }
      this._router.navigateByUrl(this.returnUrl);
    },
    error => {
      console.log(error);
    })
    
  }
  

}
