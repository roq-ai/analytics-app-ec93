import * as yup from 'yup';

export const dashboardValidationSchema = yup.object().shape({
  current_day_sales: yup.number().integer().nullable(),
  week_to_date_sales: yup.number().integer().nullable(),
  average_order_amount: yup.number().integer().nullable(),
  total_orders: yup.number().integer().nullable(),
  business_id: yup.string().nullable().required(),
});
