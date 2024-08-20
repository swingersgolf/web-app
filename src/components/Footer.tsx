import { useNavigate } from "react-router-dom";
import BannerLogo from "@assets/branding/BannerLogo.svg";
import LogoButton from "@components/buttons/LogoButton";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div id="footer" className="flex flex-row justify-between w-full py-24 border-t border-dark">
            <div id="contact-info" className="flex flex-col justify-between">
                <LogoButton/>
                <p id="copyright" className="hover:text-text text-md font-medium">© 2021 SwingersGolf, Inc.</p>
            </div>
            <div className="flex flex-row gap-x-8">
                <div id="pages" className="flex flex-col justify-start items-start gap-y-2">
                    <p className="text-md font-semibold">Pages</p>
                    <div className="flex flex-col justify-start items-start gap-y-1">
                        <button className="hover:text-text text-md font-medium" onClick={() => navigate("/")}>Home</button>
                        <button className="hover:text-text text-md font-medium" onClick={() => navigate("/postings")}>Postings</button>
                        <button className="hover:text-text text-md font-medium" onClick={() => navigate("/account")}>Account</button>
                    </div>                
                </div>
                <div id="resources" className="flex flex-col justify-start items-start gap-y-2">
                    <p className="text-md font-semibold">Resources</p>
                    <div className="flex flex-col justify-start items-start gap-y-1">
                        <button className="hover:text-text text-md font-medium" onClick={() => navigate("/privacy")}>Privacy & terms</button>
                        <button className="hover:text-text text-md font-medium" onClick={() => navigate("/contact")}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
