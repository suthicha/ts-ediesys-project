import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../../router.animations';
import { Subject } from 'rxjs/Subject';
import { MessageOrder } from '../../models';
import { AuthSession, IAuth, IMessageOrder } from '../../share';
import { OrderService } from '../../services';
import { Observable } from "rxjs/Observable";
import { FormControl } from '@angular/forms';

declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [ flyInOut()]
})
export class OrdersComponent implements OnInit {

  auth: IAuth;
  orders: MessageOrder[];
  loadmessage$: Observable<IMessageOrder[]>
  filterText: string = "";
  filterInput = new FormControl();

  constructor(
    private _orderService: OrderService,
    private _authSession: AuthSession) { 
    }

  ngOnInit() {
    this.auth = this._authSession.getSession;
    this.loadMessage();

    this.filterInput
      .valueChanges
      .debounceTime(200)
      .subscribe(term => {
        this.filterText = term;
      });
  }

  transStatusText(id: any){
    if (id === 0)
      return "Open";
    else
      return id === 1 ?"Proceed":"Received";
  }

  private loadMessage(){

    this.loadmessage$ = this._orderService.getOrders(this.auth.secretkey, this.auth.id);

    this.loadmessage$.subscribe(
      orders => this.orders = orders,
      err => console.log(err)
    )
  }

  deleteOrder(order: any){
    console.log(order);
  }

  showDialog(){
    $('#exampleModal').modal({
      keyboard: false,
      backdrop: 'static'
    });
  }


}
