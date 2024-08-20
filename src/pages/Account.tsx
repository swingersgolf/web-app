import Page from "@components/Page";
import Navbar from "@components/Navbar";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import TextButton from "@components/buttons/TextButton";
import Footer from "@components/Footer";

const Account = () => {
    const { account, signOut } = useAuth();
    const navigate = useNavigate();    

    const handleSignOut = () => {
        signOut();
        navigate('/');
    }    

    return (
        <Page id="account">
            <div id="account-content" className="flex flex-col justify-start items-start w-full min-h-screen">
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
            <Footer/>
        </Page>
    );
};

export default Account;
