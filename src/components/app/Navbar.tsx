import { useNavigate } from 'react-router-dom';
import LogoButton from '@components/buttons/LogoButton';
import { useAuth } from '@contexts/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { token } = useAuth();
    return (
        <nav id="navbar" className="flex flex-row justify-between items-center h-20 w-full text-light-green font-semibold text-base z-50">
            <div id="pages" className="flex flex-row gap-x-12">
                <LogoButton color="green" type='icon' onClick={() => navigate('/app')} ariaLabel='App Home Button'/>
            </div>
            <div id="account" className="flex flex-row gap-x-4">
                <div id="profile" onClick={() => navigate('/app/profile')} className='hover:cursor-pointer' aria-label='Profile Icon'>
                    {JSON.stringify(token)}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
