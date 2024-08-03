import { FC } from 'react';
import { useForm, SubmitHandler, Resolver, UseFormRegisterReturn, FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';
import { FiAlertTriangle } from 'react-icons/fi';
import TextButton from '@components/buttons/TextButton';

interface FormProps {
	formFields: { label: string; type: string; name: string }[];
	validationSchema: Resolver<any>;
	onSubmit: SubmitHandler<any>;
	error?: string;
	buttonText: string;
}

interface FormFieldProps {
    label: string;
    type: string;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
    register: UseFormRegisterReturn;
}
  
const AuthFormField: FC<FormFieldProps> = ({ label, type, error, register }) => {
return (
    <div className="flex flex-col">
    <label><p>{label}</p></label>
    <input type={type} {...register} />
    {error && (
        <p className="text-alert text-sm flex items-center gap-x-2">
        <FiAlertTriangle className="inline" /> {error.message?.toString()}
        </p>
    )}
    </div>
);
};

const AuthForm: FC<FormProps> = ({ formFields, validationSchema, onSubmit, error, buttonText }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: validationSchema,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-8">
      {formFields.map((field) => (
        <AuthFormField
          key={field.name}
          label={field.label}
          type={field.type}
          error={errors[field.name]}
          register={register(field.name)}
        />
      ))}
      <TextButton type="submit" text={buttonText}/>
    </form>
  );
};

export default AuthForm;
