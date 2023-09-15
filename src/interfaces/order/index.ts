import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  business_id: string;
  order_amount?: number;
  order_date: any;
  order_status?: string;
  order_number?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  business_id?: string;
  order_status?: string;
  order_number?: string;
}
