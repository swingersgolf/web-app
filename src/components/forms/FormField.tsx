import { FC } from 'react';
import { UseFormRegister, FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { FiAlertTriangle } from 'react-icons/fi';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface FormFieldProps {
  label: string;
  type: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
}

const FormField: FC<FormFieldProps> = ({ label, type, error, register }) => {
  return (
    <div className="flex flex-col" aria-label={label}>
      {type === 'date' ? (
        <DatePicker
          {...register}
          format="YYYY-MM-DD"
        />
      ) : (
        <TextField type={type} id={label} label={label} variant="outlined" {...register} />
      )}
      {error && <p className="text-alert-error text-sm flex items-center gap-x-2"><FiAlertTriangle className="inline" /> {error.message}</p>}
    </div>
  );
};

export default FormField;
