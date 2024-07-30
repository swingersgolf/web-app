import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div id="footer" className="flex flex-row justify-between w-full py-24">
            <div id="contact-info" className="flex flex-col justify-between w-1/4">
                <h4 className="text-text">SwingersGolf</h4>
                <p id="copyright" className="text-sm">© 2021 SwingersGolf, Inc.</p>
            </div>
            <div id="pages" className="flex flex-col justify-start items-start w-1/4 gap-y-2">
                <p>Pages</p>
                <button onClick={() => navigate("/products")}>Products</button>
                <button onClick={() => navigate("/about")}>About</button>
            </div>
            <div id="contact" className="flex flex-col justify-start items-start w-1/4 gap-y-2">
                <p>Contact</p>
                <button onClick={() => navigate("/contact")}>Contact us</button>
            </div>
            <div id="resources" className="flex flex-col justify-start items-start w-1/4 gap-y-2">
                <p>Resources</p>
                <button onClick={() => navigate("/products")}>Privacy Policy</button>
                <button onClick={() => navigate("/products")}>Terms of service</button>
            </div>
        </div>
    )
}

export default Footer;
