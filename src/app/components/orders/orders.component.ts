import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showDialog(){
    $('#exampleModal').modal({
      keyboard: false,
      backdrop: 'static'
    });
  }


}
