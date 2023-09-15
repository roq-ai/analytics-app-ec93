import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getDashboardById, updateDashboardById } from 'apiSdk/dashboards';
import { dashboardValidationSchema } from 'validationSchema/dashboards';
import { DashboardInterface } from 'interfaces/dashboard';
import { BusinessInterface } from 'interfaces/business';
import { getBusinesses } from 'apiSdk/businesses';

function DashboardEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<DashboardInterface>(
    () => (id ? `/dashboards/${id}` : null),
    () => getDashboardById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: DashboardInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateDashboardById(id, values);
      mutate(updated);
      resetForm();
      router.push('/dashboards');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<DashboardInterface>({
    initialValues: data,
    validationSchema: dashboardValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Dashboards',
              link: '/dashboards',
            },
            {
              label: 'Update Dashboard',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Dashboard
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Current Day Sales"
            formControlProps={{
              id: 'current_day_sales',
              isInvalid: !!formik.errors?.current_day_sales,
            }}
            name="current_day_sales"
            error={formik.errors?.current_day_sales}
            value={formik.values?.current_day_sales}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('current_day_sales', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Week To Date Sales"
            formControlProps={{
              id: 'week_to_date_sales',
              isInvalid: !!formik.errors?.week_to_date_sales,
            }}
            name="week_to_date_sales"
            error={formik.errors?.week_to_date_sales}
            value={formik.values?.week_to_date_sales}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('week_to_date_sales', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Average Order Amount"
            formControlProps={{
              id: 'average_order_amount',
              isInvalid: !!formik.errors?.average_order_amount,
            }}
            name="average_order_amount"
            error={formik.errors?.average_order_amount}
            value={formik.values?.average_order_amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('average_order_amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Total Orders"
            formControlProps={{
              id: 'total_orders',
              isInvalid: !!formik.errors?.total_orders,
            }}
            name="total_orders"
            error={formik.errors?.total_orders}
            value={formik.values?.total_orders}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('total_orders', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<BusinessInterface>
            formik={formik}
            name={'business_id'}
            label={'Select Business'}
            placeholder={'Select Business'}
            fetcher={getBusinesses}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/dashboards')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'dashboard',
    operation: AccessOperationEnum.UPDATE,
  }),
)(DashboardEditPage);
