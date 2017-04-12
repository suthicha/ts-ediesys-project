import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { PushNotificationComponent } from 'ng2-notifications/ng2-notifications';
import { Menu, MenuItem } from '../../../models';

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input('MenuItems')
  menuItems: Array<Menu>;

  @Output('ClickShowSubmenu')
  onClickShowSubmenuHandler = new EventEmitter<any>();

  constructor() { 
  }

  ngOnInit() {
    
  }

  showSubmenu(event){
    this.onClickShowSubmenuHandler.emit({event});
  }

  

}
