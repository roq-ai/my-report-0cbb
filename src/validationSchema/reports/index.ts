import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  excel_data: yup.string().required(),
  filter: yup.string(),
  business_id: yup.string().nullable(),
});
