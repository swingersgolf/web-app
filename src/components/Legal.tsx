import { useNavigate } from "react-router-dom";

const Legal = () => {
    const navigate = useNavigate();
    return (
        <div id="legal" className="flex flex-row justify-start items-center gap-x-8">
            <button onClick={() => navigate('/')}><p className="text-sm font-medium hover:text-dark">© Swingers</p></button>
            <button onClick={() => navigate('/contact')}><p className="text-sm font-medium hover:text-dark">Contact</p></button>
            <button onClick={() => navigate('/privacy-policy')}><p className="text-sm font-medium hover:text-dark">Privacy & terms</p></button>
        </div>
    );
}

export default Legal;
