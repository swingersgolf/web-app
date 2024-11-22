import BannerLogoLight from '~/components/assets/BannerLogoLight';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Link } from '@remix-run/react';

const Footer = () => {
    const Socials = [
        {
            name: 'Instagram',
            icon: <SiInstagram/>,
            to: 'https://www.instagram.com/swingersgolfapp'
        },
        {
            name: 'Facebook',
            icon: <SiFacebook/>,
            to: 'https://www.facebook.com/swingersgolfapp'
        },
        {
            name: 'X',
            icon: <SiX/>,
            to: 'https://www.x.com/swingersgolfapp'
        }
    ];
    
    return (
        <footer id='footer'>
            <nav id='footer-nav' className='grid grid-cols-1 gap-y-8 w-full'>
                <Link to="/" id='banner-logo-link' className='w-52 md:w-96 flex-grow'>
                    <BannerLogoLight />
                </Link>
                <div id='socials'>
                    <ul className='flex flex-row items-center text-neutral-dark gap-x-4'>
                        {Socials.map((social, index) => (
                            <li key={index}>
                                <Link to={social.to} className='flex items-center justify-center p-1.5 bg-neutral-light rounded-full'>
                                    {social.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id='contact-details' className='text-sm'>
                    © 2024 Swingers, a product of Links Connect, Inc.
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
