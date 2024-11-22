import { Link } from "@remix-run/react";
import { MdMenu } from "react-icons/md";
import BannerLogo from "~/components/assets/BannerLogo";
import { LinkType } from "~/types/navigationTypes";

const Header = () => {
    const SiteLinks: LinkType[] = [];
    const actionButtons: LinkType[] = [
        {
            name: "Contact Us",
            url: "#!"
        },
    ]

    return (
        <header>
            <nav id="header-nav" className="hidden md:flex flex-row justify-between items-center text-lg">
                <Link to="/" id='banner-logo-link' className='w-52'>
                    <BannerLogo />
                </Link>
                <div className="flex flex-row items-center gap-x-4 lg:gap-x-8">
                    <ul className="hidden md:flex flex-row items-center justify-center gap-x-2 lg:gap-x-4">
                        {SiteLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.url} className="px-4 py-2 bg-background-primary border border-background-primary hover:bg-background-secondary hover:border-background-secondary rounded-md duration-200 transition-all">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div>
                        {actionButtons.map((button, index) => (
                            <Link key={index} to={button.url} className="bg-neutral-dark border-neutral-dark border hover:bg-neutral-light text-neutral-light hover:text-neutral-dark transition-all duration-200 py-2 px-4 rounded-md">{button.name}</Link>
                        ))}
                    </div>
                </div>
            </nav>
            <nav id="header-nav" className="flex md:hidden flex-row justify-between items-center text-lg">
                <Link to="/" id='banner-logo-link' className='w-36'>
                    <BannerLogo />
                </Link>
                <button className="md:hidden flex">
                    <MdMenu/>
                </button>
            </nav>
        </header>
    )
}

export default Header;
