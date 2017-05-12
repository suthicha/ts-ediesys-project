import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services';
import { AuthSession } from '../../share';
import { flyInOut } from '../../router.animations';
import { Subject } from 'rxjs/Subject';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [ flyInOut()]
})
export class LoginComponent implements OnInit {

  subjectHandler = new Subject();
  returnUrl: string = '';
  errorResponse: string = '';

  constructor(
    private _loginService: LoginService,
    private _authSession: AuthSession,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    
    this.subjectHandler.subscribe((nextValue)=>{
      $('#loading').removeClass('spinning');
    });

    $('.form-control').addClass('input-sm');
    $('.btn').addClass('btn-sm');

    this._authSession.setSession = undefined;
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';  
  }

  onSubmit(f){

    $('#loading').addClass('spinning');
    this.errorResponse = '';

    setTimeout(()=>{
        this._loginService.identify(f.value.username, f.value.password)
            .subscribe(
              resp => {
                this._authSession.setSession = resp;
                this.subjectHandler.next(resp);
                
                if (this.returnUrl == '/')
                {
                this._router.navigateByUrl('/orders');
                }
                this._router.navigateByUrl(this.returnUrl);
              },
              error => {
                this.errorResponse = 'The username or password is incorrect.';
              },
              ()=> { console.log('complete')}
        ) //end indentify
        
    }, 2000)

    
  }

  goRegister(event){
    this._router.navigateByUrl("/register");
    event.preventDefault();
  }
  

}
