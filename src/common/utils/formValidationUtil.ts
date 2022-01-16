import * as Yup from 'yup';

export const submissionFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').max(100, 'Name exceeded maximum size of 100 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid')
    .max(100, 'Email exceeded maximum size of 100 characters'),
  contactNumber: Yup.string()
    .required('Contact number is required')
    .max(26, 'Contact number exceeded maximum size of 26 characters'),
  agencyName: Yup.string().max(100, 'Agency Name exceeded maximum size of 100 characters'),
  feedback: Yup.string().required('Feedback is required').max(256, 'Feedback exceeded maximum size of 256 characters'),
});

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid')
    .max(100, 'Email exceeded maximum size of 100 characters'),
  contactNumber: Yup.string()
    .required('Contact number is required')
    .max(26, 'Contact number exceeded maximum size of 26 characters'),
});
