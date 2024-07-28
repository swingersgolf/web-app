
const Footer = () => {

    return (
        <div id="footer" className="flex flex-row justify-between w-full py-24">
            <div id="contact-info" className="flex flex-col justify-between w-1/4">
                <h4 className="text-text">SwingersGolf</h4>
                <p id="copyright" className="text-sm">© 2021 SwingersGolf, Inc.</p>
            </div>
            <div id="pages" className="flex flex-col w-1/4 gap-y-2">
                <p>Pages</p>
                <a href="/products">Products</a>
                <a href="/about">About</a>
            </div>
            <div id="contact" className="flex flex-col w-1/4 gap-y-2">
                <p>Contact</p>
                <a href="/contact">Contact Us</a>
                <a href="/support">Support</a>
                <a href="/faq">FAQ</a>
            </div>
            <div id="resources" className="flex flex-col w-1/4 gap-y-2">
                <p>Resources</p>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
            </div>
        </div>
    )
}

export default Footer;
