

const Footer = () => {
    return (
        <div id="footer" className="flex flex-col w-full py-32 gap-y-8">
            <h3>SwingersGolf</h3>
            <div className="flex flex-row justify-between">
                <div id="contact-info">
                    <p>1234 Address Road, City, Province</p>
                    <p>123-456-7890</p>
                    <div id="social-media-container" className="flex flex-row">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div id="links" className="flex flex-row gap-x-4">
                    <div className="flex flex-col gap-y-2">
                        <p>Pages</p>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <a href="/privacy">Privacy</a>
                        <a href="/terms">Terms</a>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p>Contact</p>
                        <a href="/contact">Contact Us</a>
                        <a href="/support">Support</a>
                        <a href="/faq">FAQ</a>
                    </div>
                </div>
            </div>
            <div id="legal-info" className="flex flex-row border-t border-t-black py-2 gap-x-4">
                <p className="flex flex-grow">© 2024 SwingersGolf. All rights reserved.</p>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
            </div>
        </div>
    )
}

export default Footer;
