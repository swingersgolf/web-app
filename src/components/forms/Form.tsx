import { FC } from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import TextButton from '@components/buttons/TextButton';
import FormField from '@components/forms/FormField';
import { FiAlertTriangle } from 'react-icons/fi';

interface FormProps {
	formFields: { label: string; type: string; name: string }[];
	validationSchema: Resolver<any>;
	onSubmit: SubmitHandler<any>;
	error?: string;
	buttonText: string;
}

const Form: FC<FormProps> = ({ formFields, validationSchema, onSubmit, error, buttonText }) => {
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: validationSchema,
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
			{formFields.map((field) => (
				<FormField
					key={field.name}
					label={field.label}
					type={field.type}
					error={errors[field.name]}
					register={register(field.name)}
				/>
			))}
			{error && (
				<p className="text-alert text-sm flex items-center gap-x-2">
					<FiAlertTriangle className="inline" /> {error}
				</p>
			)}
			<TextButton type="submit" text={buttonText} ariaLabel="Submit Button" className="w-full"/>
		</form>
	);
};

export default Form;
