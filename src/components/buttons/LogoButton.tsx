import { useNavigate } from 'react-router-dom';
import BannerLogo from '@assets/branding/BannerLogo.svg';
import BannerLogoWhite from '@assets/branding/BannerLogoWhite.svg';

interface LogoButtonProps {
    color?: 'white' | 'green';
}

const LogoButton = ({ color = 'green' }: LogoButtonProps) => {
    const navigate = useNavigate();
    const logoSrc = color === 'white' ? BannerLogoWhite : BannerLogo;

    return (
        <button 
            onClick={() => navigate('/')} 
            className="font-alternative font-black text-2xl"
        >
            <img src={logoSrc} alt="banner-logo" className='h-8 w-auto'/>
        </button>
    );
}

export default LogoButton;
