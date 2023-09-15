import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface DashboardInterface {
  id?: string;
  business_id: string;
  current_day_sales?: number;
  week_to_date_sales?: number;
  average_order_amount?: number;
  total_orders?: number;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface DashboardGetQueryInterface extends GetQueryInterface {
  id?: string;
  business_id?: string;
}
