import ChevronArrowButton from "@components/buttons/ChevronArrowButton";
import Page from "@components/Page";
import Navbar from "@components/app/Navbar";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "@components/Card";
import TextButton from "@components/buttons/TextButton";


const Profile = () => {
    const { token, signOut } = useAuth();
    const navigate = useNavigate();
    
    const handleSignOut = () => {
        signOut();
        navigate('/');
    }

    return (
        <Page id="profile">
            <Navbar/>
            <Card>
                <h1>Profile</h1>
                <div>
                    <h3>Token</h3>
                    <p>{token}</p>
                </div>
                <div className="bg-dark-green">
                    <TextButton onClick={handleSignOut} text="Sign Out" ariaLabel="Sign Out Button"/>
                </div>
            </Card>
        </Page>
    )
};

export default Profile;
