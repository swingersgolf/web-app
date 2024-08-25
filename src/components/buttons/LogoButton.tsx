import BannerLogo from '@assets/branding/BannerLogo.svg';
import BannerLogoLight from '@assets/branding/BannerLogoLight.svg';
import Icon from '@assets/branding/Icon.svg';
import IconLight from '@assets/branding/IconLight.svg';

interface LogoButtonProps {
	color?: 'white' | 'green';
	type?: 'banner' | 'icon';
	onClick?: () => void;
	title?: string;
	ariaLabel: string;
	className?: string;
}

const logoDetails = {
	banner: {
		default: BannerLogo,
		white: BannerLogoLight,
		alt: 'Banner Logo',
	},
	icon: {
		default: Icon,
		white: IconLight,
		alt: 'Icon Logo',
	},
};

const LogoButton = ({ color = 'green', type = 'banner', onClick, className }: LogoButtonProps) => {
	const logo = logoDetails[type] || logoDetails.banner; // Fallback to 'banner' if 'type' is invalid
	const logoSrc = color === 'white' ? logo.white : logo.default;

	return (
		<button
		onClick={onClick}
		className={`${className} font-alternative font-black text-2xl`}
		aria-label="Swingers Golf Logo Button"
		>
			<img src={logoSrc} alt={logo.alt} className="h-8 w-auto" />
		</button>
	);
};

export default LogoButton;
