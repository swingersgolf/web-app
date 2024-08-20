import { SiLinkedin, SiInstagram, SiX, SiFacebook } from "react-icons/si";

const SocialMedia = () => {
        
    const handleSocialMediaClick = (socialMedia: string) => {
        console.log(`Navigating to ${socialMedia} page...`);

    }

    return (
        <div id="social-media-container" className="flex justify-row gap-x-4">
            <SiFacebook className="w-8 h-8 hover:cursor-pointer hover:text-light-green transition-colors duration-300" onClick={() => handleSocialMediaClick("facebook.com")}/>
            <SiInstagram className="w-8 h-8 hover:cursor-pointer hover:text-light-green transition-colors duration-300" onClick={() => handleSocialMediaClick("instagram.com")}/>
            <SiLinkedin className="w-8 h-8 hover:cursor-pointer hover:text-light-green transition-colors duration-300" onClick={() => handleSocialMediaClick("linkedin.com")}/>
            <SiX className="w-8 h-8 hover:cursor-pointer hover:text-light-green transition-colors duration-300" onClick={() => handleSocialMediaClick("x.com")}/>
        </div>
    );
}

export default SocialMedia;
