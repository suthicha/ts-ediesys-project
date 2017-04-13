import { Component, OnInit, 
      trigger,
      state,
      style,
      animate,
      transition } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services';
import { AuthSession } from '../../share';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.5s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class LoginComponent implements OnInit {

  returnUrl: string = '';
  errorResponse: string = '';

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

    $('#loading').addClass('spinning');
    this.errorResponse = '';

    setTimeout(()=>{
        this._loginService.identify(f.value.username, f.value.password)
            .subscribe(resp => {
                this._authSession.setSession = resp;
                console.log(this._authSession.getSession);
                if (this.returnUrl == '/')
                {
                this._router.navigateByUrl('/orders');
                }
                this._router.navigateByUrl(this.returnUrl);
            },
            error => {
                this.errorResponse = 'The username or password is incorrect.';
            }
        ) //end indentify
        $('#loading').removeClass('spinning');
    }, 2000)

    
  }

  goRegister(event){
    this._router.navigateByUrl("/register");
    event.preventDefault();
  }
  

}
