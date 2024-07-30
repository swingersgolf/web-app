import { useNavigate } from 'react-router-dom';
import ChevronArrowButton from "./ChevronArrowButton.tsx";
import BannerLogoWhite from '../assets/branding/BannerLogoWhite.svg';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav id="navbar" className="flex flex-row justify-between items-center h-20 w-full text-light font-semibold text-base z-50">
            <div id="pages" className="flex flex-row gap-x-12">
                <button 
                    onClick={() => navigate('/')} 
                    className="font-alternative font-black text-2xl"
                >
                    <img src={BannerLogoWhite} alt="banner-logo-white" className='h-12 w-auto'/>
                </button>
                {/* <button 
                    onClick={() => navigate('/products')}
                >
                    Products
                </button>
                <button 
                    onClick={() => navigate('/about')}
                >
                    About
                </button> */}
            </div>
            <div id="account" className="flex flex-row gap-x-4">
                <ChevronArrowButton text="Create Account" onClick={() => navigate('/create-account')} />
                <ChevronArrowButton text="Sign in" onClick={() => navigate('/sign-in')} background />
            </div>
        </nav>
    );
}

export default Navbar;
