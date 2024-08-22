import { useState } from "react";
import Page from "@components/Page";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import TextButton from "@components/buttons/TextButton";
import { FiX } from "react-icons/fi";
import Card from "@components/Card";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const Account = () => {
    const { account, signOut, updateAccount, fetchAccount } = useAuth();
    const navigate = useNavigate();    

    const [isEditing, setIsEditing] = useState(false);
    const [editedAccount, setEditedAccount] = useState<Partial<typeof account>>({});

    const handleSignOut = () => {
        signOut();
        navigate('/');
    };

    const handleInputChange = (key: string, value: string) => {
        setEditedAccount({
            ...editedAccount,
            [key]: value,
        });
    };

    const handleSave = async () => {
        await updateAccount(editedAccount);        
        await fetchAccount();
        setIsEditing(false);
        setEditedAccount({});
    };

    const handleCancel = () => {
        setEditedAccount({});
        setIsEditing(false);
    };

    const accountEntries = account ? Object.keys(account).map(key => [key, account[key]]) : [];

    return (
        <Page id="register">
            <Navbar/>
            <div className="trapezoid-background-2 bg-dark-green" />
            <div className="mobile-trapezoid-background-2 bg-dark-green" />
            <div id="register-content" className="flex flex-col justify-start gap-y-6 py-16">
                <Card id="create-account-form" className="w-form-card-mobile md:w-form-card-md lg:w-form-card-lg h-fit gap-y-6">
                    <h2>Account</h2>
                    <div id="account-info" className="flex flex-col gap-y-4">
                        {accountEntries.map(([key, value]: [string, any] | any[], _index: number, _array: any[][]) => (
                            <div key={key}>
                                <h3>{key}</h3>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={editedAccount[key] ?? value ?? ""}
                                        onChange={(e) => handleInputChange(key, e.target.value)}
                                        className="border rounded p-2"
                                    />
                                ) : (
                                    <p>{value ? value : "N/A"}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-y-4 flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex flex-row items-center gap-x-4">
                            {isEditing ? (
                                <>
                                    <TextButton onClick={handleSave} text="Save" ariaLabel="Save account changes button"/>
                                    <TextButton onClick={handleCancel} text="Cancel" ariaLabel="Cancel editing account button" backgroundColor="bg-caption"/>
                                </>
                            ) : (
                                <>
                                    <TextButton onClick={() => setIsEditing(true)} text="Edit Account" ariaLabel="Edit account button"/>
                                </>
                            )}
                        </div>
                        <TextButton onClick={handleSignOut} text="Sign out" ariaLabel="Sign out button" backgroundColor="bg-caption"/>
                    </div>
                </Card>
            </div>
            <Footer/>
        </Page>
    );
};

export default Account;
