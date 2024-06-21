import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderTableComponent } from './order-table/order-table.component';

const routes: Routes = [
  { path:  'orders', component:  OrderTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
