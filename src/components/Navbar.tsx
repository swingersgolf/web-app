import { useNavigate } from 'react-router-dom';
import ChevronArrowButton from "@components/buttons/ChevronArrowButton";
import LogoButton from '@components/buttons/LogoButton';
import { useAuth } from '@contexts/AuthContext';
import IconMenu from './IconMenu';
import { FiUser, FiX } from 'react-icons/fi';

const Navbar = () => {
    const navigate = useNavigate();
    const { token, account, signOut } = useAuth();

    const accountMenuOptions = [
        { name: 'Account', handleClick: () => navigate('/account') },
        { name: 'Log Out', handleClick: () => signOut() }
    ];

    return (
        <nav id="navbar" className="flex flex-row justify-between items-center h-20 w-full text-light font-semibold text-base z-50">
            <div id="pages" className="flex flex-row gap-x-12">
                <LogoButton color="white" type='banner' onClick={() => navigate('/')} ariaLabel='Home Button'/>
                <button 
                    onClick={() => navigate('/postings')}
                >
                    Postings
                </button>
            </div>
                { token ?
                    <div id="account"  className="flex flex-col">
                        <IconMenu initialIcon={<FiUser className="w-9 h-9"/>} toggleIcon={<FiX className="w-9 h-9"/>} menuOptions={accountMenuOptions}/>
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
