import Page from "@components/Page";
import Navbar from "@components/app/Navbar";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import TextButton from "@components/buttons/TextButton";
import Footer from "@components/Footer";


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
            <div id="profile-content" className="flex flex-col justify-start items-start w-full">
                <h2>Profile</h2>
                <div>
                    <h3>Token</h3>
                    <p>{token}</p>
                    <h3>Name</h3>
                    <p>John Doe</p>
                    <h3>Age</h3>
                    <p>38</p>
                    <h3>Handicap Index</h3>
                    <p>7.6</p>
                    <h3>Password</h3>
                    <p>********</p>
                </div>
                <div className="bg-dark-green">
                    <TextButton onClick={handleSignOut} text="Sign Out" ariaLabel="Sign Out Button"/>
                </div>
            </div>
            <Footer/>
        </Page>
    )
};

export default Profile;
