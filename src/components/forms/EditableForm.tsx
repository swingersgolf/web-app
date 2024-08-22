import { FC } from 'react';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import TextButton from '@components/buttons/TextButton';
import FormField from '@components/forms/FormField';
import { FiAlertTriangle } from 'react-icons/fi';

interface EditableFormProps {
    formFields: { label: string; type: string; name: string }[];
    initialValues: Record<string, any>;
    validationSchema: Resolver<any>;
    onSubmit: SubmitHandler<Record<string, any>>;
    error?: string;
    buttonText: string;
    isEditing: boolean;
    onEdit: () => void;
}

const EditableForm: FC<EditableFormProps> = ({
    formFields,
    initialValues,
    validationSchema,
    onSubmit,
    error,
    buttonText,
    isEditing,
    onEdit
}) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialValues,
        resolver: validationSchema,
        mode: 'onChange'
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
                    disabled={!isEditing}
                />
            ))}
            {error && (
                <p className="text-alert text-sm flex items-center gap-x-2">
                    <FiAlertTriangle className="inline" /> {error}
                </p>
            )}
            <div className="flex flex-row gap-x-4">
                {isEditing ? (
                    <>
                        <TextButton type="submit" text={buttonText} ariaLabel="Submit Button" className="w-full"/>
                        <TextButton onClick={onEdit} text="Cancel" ariaLabel="Cancel editing button" backgroundColor="bg-caption"/>
                    </>
                ) : (
                    <TextButton onClick={onEdit} text="Edit Account" ariaLabel="Edit account button"/>
                )}
            </div>
        </form>
    );
};

export default EditableForm;
