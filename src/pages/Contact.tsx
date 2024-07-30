import Page from "@components/Page";
import Footer from "@components/Footer";
import Card from "@components/Card";
import TextButton from "@components/buttons/TextButton";
import SocialMedia from "@components/SocialMedia";

const Contact = () => {

    const handleContact = () => {
        console.log("Contact form submitted...");
    }

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
                        <h3>Let us help you out </h3>
                        <p>We just need a few details.</p>
                    </div>
                    <form className="flex flex-col gap-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <TextButton text="Submit" onClick={handleContact}/>
                    </form>
                </Card>
            </div>
            <Footer/>
        </Page>
    )
}

export default Contact;
