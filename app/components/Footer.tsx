import BannerLogo from '~/components/assets/BannerLogo';
// import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Link } from '@remix-run/react';
import { LinkType, SocialLinkType } from '~/types/navigationTypes';

const Footer = () => {
    const Socials: SocialLinkType[] = [];
    // const Socials: SocialLinkType[] = [
    //     {
    //         name: 'Instagram',
    //         icon: <SiInstagram/>,
    //         url: 'https://www.instagram.com/golf.swingers'
    //     },
    //     {
    //         name: 'Facebook',
    //         icon: <SiFacebook/>,
    //         url: 'https://www.facebook.com/swingersgolfapp'
    //     },
    //     {
    //         name: 'X',
    //         icon: <SiX/>,
    //         url: 'https://www.x.com/swingersgolfapp'
    //     }
    // ];

    const legal: LinkType[] = [
        {
            name: 'Privacy & Terms',
            url: '/privacy'
        },
    ]
    
    return (
        <footer id='footer'>
            <nav id='footer-nav' className='w-full flex flex-col md:flex-row justify-between items-start gap-y-4 py-8 md:gap-y-0 md:items-center border-t border-neutral-dark'>
                <Link to="/" id='banner-logo-link' className='w-44'>
                    <BannerLogo />
                </Link>
                { Socials && Socials.length > 0 &&
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
                }
                <div id='contact-details' className='text-sm'>
                    © 2024 Swingers, a product of Links Connect, Inc.
                </div>
                { legal && legal.length > 0 &&
                    <div id='legal'>
                        <ul className='flex flex-row items-center text-sm font-semibold gap-x-4'>
                            {legal.map((link, index) => (
                                <li key={index}>
                                    <Link className='hover:underline transition-all duration-200' to={link.url}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </nav>
        </footer>
    );
};

export default Footer;
