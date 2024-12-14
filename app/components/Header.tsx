import { Link } from "@remix-run/react";
import BannerLogo from "~/components/assets/BannerLogo";
import { LinkType } from "~/types/navigationTypes";

const Header = () => {
    const SiteLinks: LinkType[] = [];
    const actionButtons: LinkType[] = [
        {
            name: "Contact Us",
            url: "mailto:linksconnectinc@gmail.com"
        },
    ]

    return (
        <header id="header">
            <nav id="header-nav" className="w-full md:relative fixed top-0 z-50 bg-background-primary flex flex-row justify-between items-center text-sm md:text-lg">
                <Link to="/" id='banner-logo-link' className='w-40 md:w-52'>
                    <BannerLogo />
                </Link>
                <div className="flex flex-row items-center gap-x-4 lg:gap-x-8">
                    <ul className="hidden md:flex flex-row items-center justify-center gap-x-2 lg:gap-x-4">
                        {SiteLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} className="md:px-4 md:py-2 bg-background-primary border border-background-primary hover:bg-background-secondary hover:border-background-secondary rounded-md duration-200 transition-all">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div>
                        {actionButtons.map((button, index) => (
                            <Link key={index} to={button.url} className="bg-neutral-dark border-neutral-dark border hover:bg-neutral-light text-neutral-light hover:text-neutral-dark transition-all duration-200 py-1 px-2 md:py-2 md:px-4 rounded-md">{button.name}</Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
