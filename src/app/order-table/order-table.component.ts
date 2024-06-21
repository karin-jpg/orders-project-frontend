import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { OrderService } from '../shared/services/order.service';
import { Order } from '../shared/models/order.model';



@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'customer', 'address1', 'city', 'postcode', 'country', 'amount', 'status', 'deleted', 'last_modified', 'cancel'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator! : MatPaginator;
  currentPage: number = 1;
  hasNextPage: boolean = false;
  orders: Order[] = [];
  customerName: string = '';
  status: string = '';
  lastUsedFunction: string = '';
  tableLength: number = 0;

  constructor(private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders() {
    this.orderService.getOrders()
    .subscribe((result) => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.tableLength = result.length;
    });
  }

  public cancelOrder(order: Order) {
    this.orderService.cancelOrder(order.id)
    .subscribe((result) => {
      if (result.affectedRows != 0) {
        order.status = 'cancelled';
        alert("Order cancelled with success!");
        return;
      }
      alert("Error on cancelling order");

    });
  }

  public searchByCustomer() {
    this.orderService.searchOrdersByCustomer(this.customerName)
      .subscribe((result) => {
        this.dataSource = new MatTableDataSource(result);
        this.tableLength = result.length;
        this.dataSource.paginator = this.paginator;
      });
  }

  public searchByStatus() {
    this.orderService.searchOrdersByStatus(this.status)
      .subscribe((result) => {
        this.dataSource = new MatTableDataSource(result);
        this.tableLength = result.length;
        this.dataSource.paginator = this.paginator;
      });
  }

  public clearFilters() {
    this.customerName = '';
    this.status = '';
  }

}
