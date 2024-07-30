import { SiLinkedin, SiInstagram, SiX, SiFacebook } from "react-icons/si";
import Page from "@components/Page";
import Footer from "@components/Footer";
import Card from "@components/Card";

const Contact = () => {
    
    const handleSocialMediaClick = (socialMedia: string) => {
        console.log(`Navigating to ${socialMedia} page...`);

    }

    return (
        <Page id="contact">
            <div id="contact-content" className="flex flex-row justify-center items-center min-h-screen">
                <div className="flex flex-col">
                    <h1>Get in touch</h1>
                    <p>Have any questions or concerns?</p>
                </div>
                <Card id="contact-card" className="w-form-card">
                    <h3>Let us help you out </h3>
                    <p>We just need a few details.</p>
                    <form className="flex flex-col">
                        <div className="flex flex-row items-center justify-start">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    <div id="social-media-container" className="flex flex-row gap-x-4">
                        <SiFacebook className="w-8 h-8 hover:cursor-pointer" onClick={() => handleSocialMediaClick("facebook.com")}/>
                        <SiInstagram className="w-8 h-8 hover:cursor-pointer" onClick={() => handleSocialMediaClick("instagram.com")}/>
                        <SiLinkedin className="w-8 h-8 hover:cursor-pointer" onClick={() => handleSocialMediaClick("linkedin.com")}/>
                        <SiX className="w-8 h-8 hover:cursor-pointer" onClick={() => handleSocialMediaClick("x.com")}/>
                    </div>
                </Card>
            </div>
            <Footer/>
        </Page>
    )
}

export default Contact;
