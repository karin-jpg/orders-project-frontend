import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private headers = new HttpHeaders;


  constructor(private http: HttpClient) {

  }

   public getOrders() {
    this.headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://127.0.0.1:8000/orders/page/1');
  }
}
