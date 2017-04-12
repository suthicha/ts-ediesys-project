import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Menu } from './models';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin = true;
  menuItems = Array<Menu>();

  constructor(private _router: Router){
    let body = document.getElementsByTagName('body')[0]
    // body.classList.add("hide-sidedrawer");  

    this.menuItems = [
      {title: 'Dashboard',
        items:[
            { title:'Order overview', routeUrl:'orders', icon:'fa-file-text-o'},
            { title:'Upload', routeUrl:'upload', icon:'fa-file-text-o'}
          ]},
      {title: 'Settings',
        items: [
          { title:'User information', routeUrl:'upload', icon:'fa-user-o'},
          { title:'Configuration', routeUrl:'upload', icon:'fa-cog'}
        ]
      }
    ]

  }

  ngOnInit(){
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log(event);
        
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
