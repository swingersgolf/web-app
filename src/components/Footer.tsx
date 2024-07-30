import { useNavigate } from "react-router-dom";
import BannerLogo from "../assets/branding/BannerLogo.svg";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div id="footer" className="flex flex-row justify-between w-full py-24 border-t border-dark">
            <div id="contact-info" className="flex flex-col justify-between">
                <button 
                    onClick={() => navigate('/')} 
                    className="font-alternative font-black text-2xl"
                >
                    <img src={BannerLogo} alt="banner-logo" className='h-8 w-auto'/>
                </button>
                <p id="copyright" className="hover:text-text text-md font-medium">© 2021 SwingersGolf, Inc.</p>
            </div>
            <div className="flex flex-row gap-x-8">
                <div id="pages" className="flex flex-col justify-start items-start gap-y-2">
                    <p className="text-md font-semibold">Pages</p>
                    <div className="flex flex-col justify-start items-start gap-y-1">
                        <button className="hover:text-text text-md font-medium" onClick={() => navigate("/products")}>Products</button>
                        <button className="hover:text-text text-md font-medium" onClick={() => navigate("/about")}>About</button>
                    </div>                
                </div>
                <div id="resources" className="flex flex-col justify-start items-start gap-y-2">
                    <p className="text-md font-semibold">Resources</p>
                    <div className="flex flex-col justify-start items-start gap-y-1">
                        <button className="hover:text-text text-md font-medium" onClick={() => navigate("/privacy-policy")}>Privacy & terms</button>
                        <button className="hover:text-text text-md font-medium" onClick={() => navigate("/privacy-policy")}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
