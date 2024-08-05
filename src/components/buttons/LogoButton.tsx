import { useNavigate } from 'react-router-dom';
import BannerLogo from '@assets/branding/BannerLogo.svg';
import BannerLogoWhite from '@assets/branding/BannerLogoWhite.svg';
import BoxLogo from '@assets/branding/BoxLogo.svg';
import BoxLogoWhite from '@assets/branding/BoxLogoWhite.svg';
import IconLogo from '@assets/branding/IconLogo.svg';
import IconLogoWhite from '@assets/branding/IconLogoWhite.svg';

interface LogoButtonProps {
  color?: 'white' | 'green';
  type?: 'banner' | 'box' | 'icon';
  onClick?: () => void;
}

const LogoButton = ({ color = 'green', type = 'banner', onClick }: LogoButtonProps) => {
  const navigate = useNavigate();

  let logoSrc: string;
  if (type === 'banner') {
    logoSrc = color === 'white' ? BannerLogoWhite : BannerLogo;
  } else if (type === 'box') {
    logoSrc = color === 'white' ? BoxLogoWhite : BoxLogo;
  } else if (type === 'icon') {
    logoSrc = color === 'white' ? IconLogoWhite : IconLogo;
  } else {
    throw new Error('Invalid type');
  }

  return (
    <button
      onClick={onClick}
      className="font-alternative font-black text-2xl"
    >
      <img src={logoSrc} alt={`${type}-logo`} className="h-8 w-auto" />
    </button>
  );
};

export default LogoButton;
