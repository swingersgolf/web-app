import { useNavigate } from 'react-router-dom';
import ChevronArrowButton from "./ChevronArrowButton.tsx";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav id="navbar" className="flex flex-row justify-between items-center h-20 w-full text-navbar font-semibold text-base">
            <div id="pages" className="flex flex-row gap-x-12">
                <button 
                    onClick={() => navigate('/')} 
                    className="font-alternative font-black text-2xl"
                >
                    SwingersGolf
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
