import { Link } from "@remix-run/react";
import { MdMenu } from "react-icons/md";
import BannerLogo from "~/components/assets/BannerLogo";


const Header = () => {
    const SiteLinks = [
        {
            name: "About",
            url: "#!"
        },
        {
            name: "Contact",
            url: "#!"
        }
    ];

    return (
        <header>
            <nav id="header-nav" className="flex flex-row justify-between items-center">
                <Link to="/" id='banner-logo-link' className='w-52'>
                    <BannerLogo />
                </Link>
                <ul className="hidden md:flex flex-row items-center justify-center gap-x-2">
                    {SiteLinks.map((link, index) => (
                        <li key={index} className="nav-item">
                            <Link to={link.url}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <button className="md:hidden flex">
                    <MdMenu/>
                </button>
            </nav>
        </header>
    )
}

export default Header;
