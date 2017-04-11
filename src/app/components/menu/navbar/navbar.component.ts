import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  isLogin: boolean = false;

  @Output('ClickToggle')
  onClickToggleHandler = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    console.log(this.isLogin);
  }

  showmenu(){
    this.onClickToggleHandler.emit();
  }

}
