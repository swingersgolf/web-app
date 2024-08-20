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
	title?: string;
	ariaLabel: string;
}

const logoDetails = {
	banner: {
		default: BannerLogo,
		white: BannerLogoWhite,
		alt: 'Banner Logo',
	},
	box: {
		default: BoxLogo,
		white: BoxLogoWhite,
		alt: 'Box Logo',
	},
	icon: {
		default: IconLogo,
		white: IconLogoWhite,
		alt: 'Icon Logo',
	},
};

const LogoButton = ({ color = 'green', type = 'banner', onClick }: LogoButtonProps) => {
	const logo = logoDetails[type] || logoDetails.banner; // Fallback to 'banner' if 'type' is invalid
	const logoSrc = color === 'white' ? logo.white : logo.default;

	return (
		<button
		onClick={onClick}
		className="font-alternative font-black text-2xl"
		aria-label="Swingers Golf Logo Button"
		>
			<img src={logoSrc} alt={logo.alt} className="h-8 w-auto" />
		</button>
	);
};

export default LogoButton;
