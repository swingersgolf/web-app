import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
	email: yup.string().email('Invalid email format').required('Email is required'),
	password: yup.string().required('Password is required'),
});

export const registerValidationSchema = yup.object().shape({
	email: yup.string().email('Invalid email format').required('Email is required'),
	name: yup.string().required('Name is required'),
	password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
});

export const contactValidationSchema = yup.object().shape({
	email: yup.string().email('Invalid email format').required('Email is required'),
	name: yup.string().required('Name is required'),
	message: yup.string().required('Message is required'),
});

export const accountValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    handicap: yup.number().min(-54, 'Handicap must be at least -54').max(54, 'Handicap must be at most 54').required('Handicap is required'),
});
