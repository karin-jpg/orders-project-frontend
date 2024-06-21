import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order, OrderCancel } from './../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private headers = new HttpHeaders;


  constructor(private http: HttpClient) {

  }

   public getOrders(): Observable<Order[]> {
    this.headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get<Order[]>('http://127.0.0.1:8000/orders');
  }

  searchOrdersByCustomer(name: string): Observable<Order[]> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.post<Order[]>('http://127.0.0.1:8000/orders/customer', { name }, { headers });
  }

  searchOrdersByStatus(status: string): Observable<Order[]> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.post<Order[]>('http://127.0.0.1:8000/orders/status', { status,  }, { headers });
  }

  cancelOrder(orderId: number): Observable<OrderCancel> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.post<OrderCancel>(`http://127.0.0.1:8000/orders/${orderId}/cancel`, { headers });
  }
}
