import ChevronArrowButton from "@components/buttons/ChevronArrowButton";
import Page from "@components/Page";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const { token, signOut } = useAuth();
    const navigate = useNavigate();
    
    const handleSignOut = () => {
        signOut();
        navigate('/');
    }

    return (
        <Page id="profile">
            <h1>Profile</h1>
            <div>
                <h3>Token</h3>
                <p>{token}</p>
            </div>
            <div className="bg-dark-green">
                <ChevronArrowButton onClick={handleSignOut} text="Sign Out" background/>
            </div>
        </Page>
    )
};

export default Profile;
