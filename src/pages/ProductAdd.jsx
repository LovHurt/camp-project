import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Button, FormField, Label } from 'semantic-ui-react';
import KodlamaTextInput from '../utilities/customFormControl/KodlamaTextInput';

export default function ProductAdd() {
  const initialValues = { productName: '', unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required('Product name is required'),
    unitPrice: Yup.number().required('Product price has to be given'),
  });

  return (
    <div>
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit = {(values)=>{
        console.log(values)}}
      >
        <Form>
            <KodlamaTextInput name="productName" placeholder="Product Name" />

            <KodlamaTextInput name="unitPrice" placeholder="Product Price" />

          <Button color="green" type="submit">Add</Button>
        </Form>
      </Formik>
    </div>
  );
}
