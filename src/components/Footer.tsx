import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div id="footer" className="flex flex-row justify-between w-full py-24 border-t border-dark">
            <div id="contact-info" className="flex flex-col justify-between">
                <h4 className="text-text">SwingersGolf</h4>
                <p id="copyright" className="hover:text-text text-sm font-medium">© 2021 SwingersGolf, Inc.</p>
            </div>
            <div className="flex flex-row gap-x-8">
                <div id="pages" className="flex flex-col justify-start items-start gap-y-2">
                    <p className="text-sm font-semibold">Pages</p>
                    <div className="flex flex-col justify-start items-start gap-y-1">
                        <button className="hover:text-text text-sm font-medium" onClick={() => navigate("/products")}>Products</button>
                        <button className="hover:text-text text-sm font-medium" onClick={() => navigate("/about")}>About</button>
                    </div>                
                </div>
                <div id="resources" className="flex flex-col justify-start items-start gap-y-2">
                    <p className="text-sm font-semibold">Resources</p>
                    <div className="flex flex-col justify-start items-start gap-y-1">
                        <button className="hover:text-text text-sm font-medium" onClick={() => navigate("/privacy-policy")}>Privacy & terms</button>
                        <button className="hover:text-text text-sm font-medium" onClick={() => navigate("/privacy-policy")}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
