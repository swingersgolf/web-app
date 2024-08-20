import Page from "@components/Page";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import TextButton from "@components/buttons/TextButton";
import { FiX } from "react-icons/fi";

const Account = () => {
    const { account, signOut } = useAuth();
    const navigate = useNavigate();    

    const handleSignOut = () => {
        signOut();
        navigate('/');
    }    

    return (
        <Page id="account">
            <div className="irregular-background bg-dark-green" />
            <div id="account-content" className="flex flex-col justify-start items-start w-full relative my-16">
                <div className="flex flex-col items-center absolute top-0 right-0">
                    <div
                        className="flex justify-center items-center font-medium bg-dark w-12 h-12 rounded-full bg-opacity-30 text-sm border border-opacity-10 border-dark backdrop-blur cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <FiX className="text-primary w-9 h-9"/>
                    </div>
                    <p>Esc</p>
                </div>
                <h2>Account</h2>
                <div>
                    <h3>Email</h3>
                    <p>{account && account.email}</p>
                    <h3>Name</h3>
                    <p>{account && account.name}</p>
                    <h3>Handicap Index</h3>
                    <p>{account && account.handicapIndex}</p>
                    <h3>Password</h3>
                    <p>********</p>
                </div>
                <div className="bg-dark-green">
                    <TextButton onClick={handleSignOut} text="Sign Out" ariaLabel="Sign Out Button"/>
                </div>
            </div>
        </Page>
    );
};

export default Account;
