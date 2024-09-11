import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '350px', height:'500', padding: '50px', border: '6px solid#D2691E', borderRadius: '25px', background: '#FAEBD7' }}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div style={{ marginBottom: '20px' }}>
              <label>Email address:</label>
              <Field type="email" name="email" style={{ width: '100%', padding: '9px' }} />
              <ErrorMessage name="email" render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Password:</label>
              <Field type="password" name="password" style={{ width: '100%', padding: '5px' }} />
              <ErrorMessage name="password" render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
            </div>
            <button type="submit" style={{ width: '100%', padding: '5px', background: '#8B4513', color: 'white', border: 'none', borderRadius: '25px' }}>Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;