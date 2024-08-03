import { FC } from 'react';
import Page from "@components/Page";
import Footer from "@components/Footer";
import Card from "@components/Card";
import TextButton from "@components/buttons/TextButton";
import SocialMedia from "@components/SocialMedia";
import Form from "@components/Form";
import { contactValidationSchema } from '@utils/validationSchema';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// Define the form values interface
interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const navigate = useNavigate();

  const handleContact = async (data: ContactFormValues) => {
    // Simulate form submission
    console.log("Contact form submitted...", data);
    // For real implementation, you might send the data to an API
    // await axios.post('your-api-endpoint', data);
    navigate('/'); // Redirect after form submission if needed
  };

  return (
    <Page id="contact">
      <div id="contact-content" className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col gap-y-4">
          <h1>Get in touch</h1>
          <p>Have any questions or concerns?</p>
          <SocialMedia/>
        </div>
        <Card id="contact-card" className="w-form-card h-fit gap-y-8">
          <div>
            <h3>Let us help you out</h3>
            <p>We just need a few details.</p>
          </div>
          <Form
            formFields={[
                { label: 'Email', type: 'email', name: 'email' },
                { label: 'Name', type: 'text', name: 'name' },
                { label: 'Message', type: 'textarea', name: 'message' }
            ]}
            validationSchema={yupResolver(contactValidationSchema)}
            onSubmit={handleContact}
            buttonText="Submit"
          />
        </Card>
      </div>
      <Footer/>
    </Page>
  );
};

export default Contact;
