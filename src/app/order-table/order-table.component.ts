import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { OrderService } from '../shared/services/order.service';
import { Order } from '../shared/models/order.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['id', 'date', 'customer', 'address1', 'city', 'postcode', 'country', 'amount', 'status', 'deleted', 'last_modified'];
  dataSource: Order[] = [];
  hasNextPage: boolean = false;

  constructor(private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders() {
    this.orderService.getOrders()
    .subscribe((result) => {
      this.dataSource =  result.orders;
      console.log(this.dataSource)
    });
  }

}
