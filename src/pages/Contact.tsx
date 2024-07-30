import { SiLinkedin, SiInstagram, SiX, SiFacebook } from "react-icons/si";
import Page from "@components/Page";

const Contact = () => {
    
    const handleSocialMediaClick = (socialMedia: string) => {
        console.log(`Navigating to ${socialMedia} page...`);

    }

    return (
        <Page id="contact">
            <div id="contact-content" className="flex flex-col justify-center items-center">
                <h1>Contact Us</h1>
                <p>Fill out the form below to contact us.</p>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                    <button type="submit">Submit</button>
                </form>
                <div id="social-media-container" className="flex flex-row gap-x-4">
                    <SiFacebook className="w-8 h-8 hover:cursor-pointer" onClick={() => handleSocialMediaClick("facebook.com")}/>
                    <SiInstagram className="w-8 h-8 hover:cursor-pointer" onClick={() => handleSocialMediaClick("instagram.com")}/>
                    <SiLinkedin className="w-8 h-8 hover:cursor-pointer" onClick={() => handleSocialMediaClick("linkedin.com")}/>
                    <SiX className="w-8 h-8 hover:cursor-pointer" onClick={() => handleSocialMediaClick("x.com")}/>
                </div>
            </div>
        </Page>
    )
}

export default Contact;
