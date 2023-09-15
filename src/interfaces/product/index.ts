import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  business_id: string;
  product_name?: string;
  product_price?: number;
  product_description?: string;
  product_stock?: number;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  business_id?: string;
  product_name?: string;
  product_description?: string;
}
