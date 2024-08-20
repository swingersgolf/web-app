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
            <div id="account-content" className="flex flex-col justify-start items-start w-full relative my-16 gap-y-8">
                <div className="flex flex-col items-center absolute top-0 right-0">
                    <div
                        className="flex justify-center items-center font-medium bg-dark w-12 h-12 rounded-full bg-opacity-30 text-sm border border-opacity-10 border-dark backdrop-blur cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <FiX className="text-primary w-9 h-9"/>
                    </div>
                </div>
                <h2>Account</h2>
                <div id="account-info" className="flex flex-col gap-y-4">
                    {/* use a map to display all fields in the account */}
                    { account && Object.entries(account).map(([key, value]: [string, any]) => (
                        <div key={key}>
                            <h3>{key}</h3>
                            <p>{value ? value : "N/A"}</p>
                        </div>
                    ))}
                </div>
                <TextButton onClick={handleSignOut} text="Edit Account" ariaLabel="Edit Account Button"/>
                <TextButton onClick={handleSignOut} text="Sign Out" ariaLabel="Sign Out Button"/>
            </div>
        </Page>
    );
};

export default Account;
