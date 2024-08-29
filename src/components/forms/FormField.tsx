import { FC } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { FiAlertTriangle } from 'react-icons/fi';
import TextField from '@mui/material/TextField';

interface FormFieldProps {
	label: string;
	type: string;
	error?: FieldError;
	register: UseFormRegisterReturn;
}

const FormField: FC<FormFieldProps> = ({ label, type, error, register }) => {
  return (
    <div className="flex flex-col" aria-label={label}>
      <TextField type={type} id="outlined-basic" label={label} variant="outlined" {...register} />
      {error && <p className="text-alert-error text-sm flex items-center gap-x-2"><FiAlertTriangle className="inline" /> {error.message}</p>}
    </div>
  );
};

export default FormField;
