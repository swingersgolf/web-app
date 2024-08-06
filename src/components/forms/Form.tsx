import { FC } from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import TextButton from '@components/buttons/TextButton';
import FormField from '@components/forms/FormField';

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
			<TextButton type="submit" text={buttonText} ariaLabel="Submit Button"/>
		</form>
	);
};

export default Form;
