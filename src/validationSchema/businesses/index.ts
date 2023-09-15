import * as yup from 'yup';

export const businessValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  sales_data: yup.number().integer().nullable(),
  average_order_amount: yup.number().integer().nullable(),
  total_orders: yup.number().integer().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
