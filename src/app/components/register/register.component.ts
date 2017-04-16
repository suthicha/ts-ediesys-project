import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services';
import { DialogComponent } from '../../components';
import { IUser } from '../../share';
import { flyInOut } from '../../router.animations';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [ flyInOut() ]
})
export class RegisterComponent implements OnInit {

  errorResponse: string = '';
  fullname: string = '';
  monitor = new Subject();
  public modal = {
      text: ''
  }

  constructor(
      private _registerService: RegisterService,
      private _router: Router) { }

  ngOnInit() {
    this.monitor.subscribe((nextValue)=>{
        $('#contentMessage').empty();
        $('<p>'+ nextValue + '</p>').appendTo('#contentMessage');
        this.showPopup();
    })
  }

  onSubmit(f){
      
      this.errorResponse = '';
      this.showLoading(true);
      setTimeout(()=>{
        this._registerService.createUser(<IUser>f.value)
            .subscribe((res) => {
                    this.showLoading(false);
                    this.monitor.next(f.value.fullname);
                    f.reset();
            },
            err => {
                this.errorResponse = 'Username or Password is duplicate.';
                this.showLoading(false);
            })
        
      },2000);

  }

  showPopup(){
      $('#popupMessage').modal();
  }

  goLoginPage(){
      this._router.navigateByUrl('/login');
  }

  private showLoading(state: boolean){
      if (state){
        $('#loading').addClass('spinning');
      }else
      {
        $('#loading').removeClass('spinning');
      }
  }

}
