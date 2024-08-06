import { useEffect } from "react";
import Page from "@components/Page";
import Navbar from "@components/app/Navbar";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import TextButton from "@components/buttons/TextButton";
import Footer from "@components/Footer";

const Account = () => {
    const { token, user, profile, fetchUser, fetchProfile, signOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            fetchUser();
        }
        if (!profile) {
            fetchProfile();
        }
    }, [user, profile, fetchUser, fetchProfile]);

    const handleSignOut = () => {
        signOut();
        navigate('/');
    }

    return (
        <Page id="account">
            <Navbar/>
            <div id="account-content" className="flex flex-col justify-start items-start w-full">
                <h2>Account</h2>
                <div>
                    <h3>Token</h3>
                    <p>{token}</p>
                    <h3>Email</h3>
                    <p>{user && user.email}</p>
                    <h3>Name</h3>
                    <p>{profile && profile.name}</p>
                    <h3>Age</h3>
                    <p>{profile && profile.age}</p>
                    <h3>Handicap Index</h3>
                    <p>{profile && profile.handicapIndex}</p>
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
