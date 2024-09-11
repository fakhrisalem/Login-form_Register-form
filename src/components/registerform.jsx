import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
  const initialValues = {
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    name: Yup.string().required('Required'),
    username: Yup.string().required('Required').matches(/^\S*$/, 'Username should not contain spaces'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one lowercase, one uppercase, one digit, and one special character'
      ),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={{ width: '360px', padding: '50px', border: '4px solid#008000 ', borderRadius: '25px', background: '#F0E68C' }}>
        <h1 style={{ textAlign: 'center' }}>Register Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div style={{ marginBottom: '20px' }}>
              <label>Email address: <span style={{ color: 'red' }}></span></label>
              <Field type="email" name="email" style={{ width: '100%', padding: '5px' }} />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Name: <span style={{ color: 'red' }}></span></label>
              <Field type="text" name="name" style={{ width: '100%', padding: '5px' }} />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Username: <span style={{ color: 'red' }}></span></label>
              <Field type="text" name="username" style={{ width: '100%', padding: '5px' }} />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Password: <span style={{ color: 'red' }}></span></label>
              <Field type="password" name="password" style={{ width: '100%', padding: '5px' }} />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Confirm Password: <span style={{ color: 'red' }}></span></label>
              <Field type="password" name="confirmPassword" style={{ width: '100%', padding: '5px' }} />
              <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />
            </div>
            <button type="submit" style={{ width: '100%', padding: '5px', background: '#C71585', color: 'white', border: 'none', borderRadius: '25px' }}>Register</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;