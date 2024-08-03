import { FC } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { FiAlertTriangle } from 'react-icons/fi';

interface FormFieldProps {
	label: string;
	type: string;
	error?: FieldError;
	register: UseFormRegisterReturn;
}

const FormField: FC<FormFieldProps> = ({ label, type, error, register }) => {
  return (
    <div className="flex flex-col">
      <label><p>{label}</p></label>
      {type === 'textarea' ? (
        <textarea
          {...register}
        />
      ) : (
        <input
          type={type}
          {...register}
        />
      )}
      {error && <p className="text-alert text-sm flex items-center gap-x-2"><FiAlertTriangle className="inline" /> {error.message}</p>}
    </div>
  );
};

export default FormField;
