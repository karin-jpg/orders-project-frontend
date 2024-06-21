import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order, OrderCancel } from './../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private headers = new HttpHeaders;
  private apiUrl = 'http://127.0.0.1:8000/orders'

  constructor(private http: HttpClient) {

  }

  public getOrders(): Observable<Order[]> {
    this.headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get<Order[]>(`${this.apiUrl}`);
  }

  public searchOrdersByCustomer(name: string): Observable<Order[]> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.post<Order[]>(`${this.apiUrl}/customer`, { name }, { headers });
  }

  public searchOrdersByStatus(status: string): Observable<Order[]> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.post<Order[]>(`${this.apiUrl}/status`, { status,  }, { headers });
  }

  public cancelOrder(orderId: number): Observable<OrderCancel> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.post<OrderCancel>(`${this.apiUrl}/${orderId}/cancel`, { headers });
  }
}
