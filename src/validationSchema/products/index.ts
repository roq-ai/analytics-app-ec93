import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  product_name: yup.string().nullable(),
  product_price: yup.number().integer().nullable(),
  product_description: yup.string().nullable(),
  product_stock: yup.number().integer().nullable(),
  business_id: yup.string().nullable().required(),
});
