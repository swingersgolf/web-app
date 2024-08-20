import { useNavigate } from 'react-router-dom';
import LogoButton from '@components/buttons/LogoButton';
import { useAuth } from '@contexts/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { account } = useAuth();
    return (
        <nav id="navbar" className="flex flex-row justify-between items-center h-20 w-full font-semibold text-base z-50">
            <div id="pages" className="flex flex-row gap-x-12">
                <LogoButton color="green" type='icon' onClick={() => navigate('/app')} ariaLabel='App Home Button'/>
            </div>
            <div id="account" onClick={() => navigate('/app/account')} className='flex items-center justify-center hover:cursor-pointer h-8 w-8 rounded-full bg-dark-green text-primary' aria-label='Account Icon'>
                {Array.from(account?.name ?? '')[0]}
            </div>
        </nav>
    );
}

export default Navbar;
