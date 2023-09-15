import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  customer_name: yup.string().nullable(),
  customer_email: yup.string().nullable(),
  customer_phone: yup.string().nullable(),
  customer_address: yup.string().nullable(),
  business_id: yup.string().nullable().required(),
});
