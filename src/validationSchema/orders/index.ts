import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_amount: yup.number().integer().nullable(),
  order_date: yup.date().required(),
  order_status: yup.string().nullable(),
  order_number: yup.string().nullable(),
  business_id: yup.string().nullable().required(),
});
