import { CustomerInterface } from 'interfaces/customer';
import { DashboardInterface } from 'interfaces/dashboard';
import { OrderInterface } from 'interfaces/order';
import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  sales_data?: number;
  average_order_amount?: number;
  total_orders?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  customer?: CustomerInterface[];
  dashboard?: DashboardInterface[];
  order?: OrderInterface[];
  product?: ProductInterface[];
  user?: UserInterface;
  _count?: {
    customer?: number;
    dashboard?: number;
    order?: number;
    product?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
