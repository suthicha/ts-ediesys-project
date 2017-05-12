import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthSession } from './share';
import { Menu } from './models';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin = false;
  menuItems = Array<Menu>();
  bodyElement: any;

  constructor(
    private _router: Router, 
    private _authSession: AuthSession){
    
  
    this.bodyElement = document.getElementsByTagName('body')[0]
    this.bodyElement.classList.add("hide-sidedrawer");  

    this.menuItems = [
      {title: 'Dashboard',
        items:[
            { title:'Order Status', routeUrl:'orders', icon:'fa-file-text-o'},
            { title:'Upload', routeUrl:'upload', icon:'fa-file-text-o'}
          ]},
      {title: 'Settings',
        items: [
          { title:'User information', routeUrl:'user', icon:'fa-user-o'}
        ]
      }
    ]
  }

  ngOnInit(){

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          if(this._authSession.loggedSecretKey){
            this.bodyElement.classList.remove("hide-sidedrawer"); 
            this.isLogin = true;
          }else{
            this.bodyElement.classList.add("hide-sidedrawer"); 
            this.isLogin = false;
          }
      }
    })
  }

 
  showmenu(){
 
    let body = document.getElementsByTagName('body')[0]

    if (body.classList.contains('hide-sidedrawer'))
    {
      body.classList.remove("hide-sidedrawer");
    }else{
      body.classList.add("hide-sidedrawer");      
    }
    
  }

  showSubmenu(src){
    let event = src.event;
    var target = event.target || event.srcElement || event.currentTarget;
    var ul = target.nextElementSibling;

    if (ul.style.display == 'block')
    {
      ul.style.display = 'none';
    }else
    {
      ul.style.display = 'block';
    }
    
  }

}
