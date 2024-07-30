import { useNavigate } from 'react-router-dom';
import ChevronArrowButton from "@components/buttons/ChevronArrowButton.tsx";
import LogoButton from '@components/buttons/LogoButton.tsx';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav id="navbar" className="flex flex-row justify-between items-center h-20 w-full text-light font-semibold text-base z-50">
            <div id="pages" className="flex flex-row gap-x-12">
                <LogoButton color="white"/>
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
                <ChevronArrowButton text="Create Account" onClick={() => navigate('/register')} />
                <ChevronArrowButton text="Sign in" onClick={() => navigate('/login')} background />
            </div>
        </nav>
    );
}

export default Navbar;
