import { useNavigate } from 'react-router-dom';
import ChevronArrowButton from "@components/buttons/ChevronArrowButton";
import LogoButton from '@components/buttons/LogoButton';
import { useAuth } from '@contexts/AuthContext';
import IconMenu from './IconMenu';
import { FiMenu, FiUser, FiX } from 'react-icons/fi';

const Navbar = () => {
    const navigate = useNavigate();
    const { token, account, signOut } = useAuth();

    const accountMenuOptions = [
        { name: 'Account', handleClick: () => navigate('/account') },
        { name: 'Sign Out', handleClick: () => signOut() }
    ];

    const authenticatedMobileMenuOptions = [
        { name: 'Postings', handleClick: () => navigate('/postings') },
        { name: 'Account', handleClick: () => navigate('/account') },
        { name: 'Sign Out', handleClick: () => signOut() }
    ];

    const unauthenticatedMobileMenuOptions = [
        { name: 'Postings', handleClick: () => navigate('/postings') },
        { name: 'Create Account', handleClick: () => navigate('/register') },
        { name: 'Sign In', handleClick: () => navigate('/login') }
    ];

    return (
        <nav id="navbar" className="flex flex-row justify-between items-center h-20 w-full text-neutral-light font-semibold text-base z-50">
            <div id="pages" className="md:flex flex-row gap-x-12 hidden">
                <LogoButton color="white" type='banner' onClick={() => navigate('/')} ariaLabel='Home Button'/>
                <button 
                    onClick={() => navigate('/postings')}
                >
                    Postings
                </button>
            </div>
            <LogoButton color="white" type='banner' onClick={() => navigate('/')} ariaLabel='Home Button' className="flex md:hidden"/>
                { token ?
                    <>
                        <div id="account"  className="md:flex flex-col hidden">
                            <IconMenu initialIcon={<FiUser className="w-9 h-9"/>} toggleIcon={<FiX className="w-9 h-9"/>} menuOptions={accountMenuOptions}/>
                        </div>
                        <div id="account"  className="flex flex-col md:hidden">
                            <IconMenu initialIcon={<FiMenu className="w-9 h-9"/>} toggleIcon={<FiX className="w-9 h-9"/>} menuOptions={authenticatedMobileMenuOptions}/>
                        </div>
                    </>
                    :
                    <>
                        <div id="account" className="md:flex hidden flex-row gap-x-4">
                            <ChevronArrowButton text="Create Account" onClick={() => navigate('/register')} ariaLabel='Create Account Button'/>
                            <ChevronArrowButton text="Sign in" onClick={() => navigate('/login')} background ariaLabel='Sign In Button'/>
                        </div>
                        <div id="account"  className="flex flex-col md:hidden">
                            <IconMenu initialIcon={<FiMenu className="w-9 h-9"/>} toggleIcon={<FiX className="w-9 h-9"/>} menuOptions={unauthenticatedMobileMenuOptions}/>
                        </div>
                    </>
                }
        </nav>
    );
}

export default Navbar;
