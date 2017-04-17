import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../../router.animations';
import { IAuth, IUser, AuthSession } from '../../share';
import { UserService } from '../../services';
import { User } from '../../models';
import { Subject } from 'rxjs/Subject';

declare var $:any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [ flyInOut()]
})
export class UserComponent implements OnInit {

  authState: IAuth;
  user: IUser = new User();
  subjectHandler = new Subject();
  
  constructor(
      private _authSession: AuthSession, 
      private _userService: UserService) { 
        this.authState = <IAuth> this._authSession.getSession;
      }

  ngOnInit() {
    this.fillUserSession();
    this.subjectHandler.subscribe((nextValue)=>{
      let str = (<string>nextValue).split(',');
      $('#loading' + str[0]).removeClass('spinning');
      $('#textMessage').empty();
      $('#textMessage').append('<h2>'+ str[1] +'</h2>')
      $('#popupMessage').modal();
    });
  }

  updateProfile(f){

    $('#loading1').addClass('spinning');

    setTimeout(()=>{

      let obj = f.value as IUser;
      obj.id = this.authState.id;
      obj.username = this.authState.username;
      obj.secretkey = this.authState.secretkey;
      obj.updateBy = this.authState.username;
      
      this._userService.putUser(obj)
        .subscribe((res)=>{
          this._authSession.setSession = res;
          this.subjectHandler.next('1,Your information updated.');
        },
        err => {
          console.log(err);
        })

    },2000);

  }

  resetPassword(f){

    $('#loading2').addClass('spinning');

    setTimeout(()=>{


      this._userService.putResetPassword(
          this.authState.id, 
          f.value.username, 
          f.value.password, 
          this.authState.secretkey)
          .subscribe((res)=>{
            this._authSession.setSession = res;
            this.authState = this._authSession.getSession;
            this.subjectHandler.next('2,Reset password success.');
          },
          err => {
            console.log(err);
          })
    },2000);

  }

  saveOption(f){
    console.log(f.value);
  }

  private fillUserSession(){

      let obj = this.authState;
      this.user = {
        id: obj.id,
        username: obj.username,
        password: '',
        fullname: obj.fullname,
        email: obj.email,
        companyName: obj.companyName,
        taxno: obj.taxno,
        phone: obj.phone,
        secretkey: obj.secretkey,
        updateBy: obj.username,
        isExportInvoice: obj.isExportInvoice,
        isImportInvoice: obj.isImportInvoice,
        isBOI: obj.isBOI,
        isOther: obj.isOther
      }
  }

}
