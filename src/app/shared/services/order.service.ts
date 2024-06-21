import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderResponse } from './../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private headers = new HttpHeaders;


  constructor(private http: HttpClient) {

  }

   public getOrders(): Observable<OrderResponse> {
    this.headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get<OrderResponse>('http://127.0.0.1:8000/orders/page/1');
  }
}
