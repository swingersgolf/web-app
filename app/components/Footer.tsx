import BannerLogoLight from '~/components/assets/BannerLogoLight';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Link } from '@remix-run/react';
import { LinkType, SocialLinkType } from '~/types/navigationTypes';

const Footer = () => {
    const Socials: SocialLinkType[] = [
        {
            name: 'Instagram',
            icon: <SiInstagram/>,
            url: 'https://www.instagram.com/golf.swingers'
        },
        {
            name: 'Facebook',
            icon: <SiFacebook/>,
            url: 'https://www.facebook.com/swingersgolfapp'
        },
        {
            name: 'X',
            icon: <SiX/>,
            url: 'https://www.x.com/swingersgolfapp'
        }
    ];

    const legal: LinkType[] = [
        {
            name: 'Terms of Service',
            url: '/terms'
        },
        {
            name: 'Privacy Policy',
            url: '/privacy'
        },
    ]
    
    return (
        <footer id='footer'>
            <nav id='footer-nav' className='grid grid-cols-1 w-full py-20'>
                <div id='footer-general-info' className='flex flex-col gap-y-8 items-center'>
                    <Link to="/" id='banner-logo-link' className='w-52 md:w-96 flex-grow'>
                        <BannerLogoLight />
                    </Link>
                    <div id='socials'>
                        <ul className='flex flex-row items-center text-neutral-dark gap-x-4'>
                            {Socials.map((social, index) => (
                                <li key={index}>
                                    <Link to={social.url} className='flex items-center justify-center p-1.5 bg-neutral-light rounded-full'>
                                        {social.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div id='contact-details' className='text-sm'>
                        © 2024 Swingers, a product of Links Connect, Inc.
                    </div>
                    <div id='legal'>
                        <ul className='flex flex-row items-center text-sm font-semibold gap-x-4'>
                            {legal.map((link, index) => (
                                <li key={index}>
                                    <Link className='hover:underline transition-all duration-200' to={link.url}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
