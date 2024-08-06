import { useNavigate } from 'react-router-dom';
import ChevronArrowButton from "@components/buttons/ChevronArrowButton";
import LogoButton from '@components/buttons/LogoButton';
import { useAuth } from '@contexts/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { token } = useAuth();
    return (
        <nav id="navbar" className="flex flex-row justify-between items-center h-20 w-full text-light font-semibold text-base z-50">
            <div id="pages" className="flex flex-row gap-x-12">
                <LogoButton color="white" type='banner' onClick={() => navigate('/')} ariaLabel='Home Button'/>
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
                { token ?
                    <div id="account" onClick={() => navigate('/app/account')} className='flex flex-row items-center hover:cursor-pointer' aria-label='Account Icon'>
                        {JSON.stringify(token)}
                    </div>
                    :
                    <div id="account" className="flex flex-row gap-x-4">
                        <ChevronArrowButton text="Create Account" onClick={() => navigate('/register')} ariaLabel='Create Account Button'/>
                        <ChevronArrowButton text="Sign in" onClick={() => navigate('/login')} background ariaLabel='Sign In Button'/>
                    </div>
                }
        </nav>
    );
}

export default Navbar;
