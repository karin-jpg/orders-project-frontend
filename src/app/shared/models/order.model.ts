export interface Order {
  id: number;
  date: string;
  customer: string;
  address1: string;
  city: string;
  postcode: string;
  country: string;
  amount: number;
  status: string;
  deleted: string;
  last_modified: string;
}


export interface OrderCancel {
  affectedRows: number;
  order: Order
}
