import { useState } from "react";
import Page from "@components/Page";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import TextButton from "@components/buttons/TextButton";
import { FiX } from "react-icons/fi";
import Card from "@components/Card";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Spinner from "@components/Spinner";
import axios from "axios";

const Account = () => {
    const { account, signOut, updateAccount, fetchAccount } = useAuth();
    const navigate = useNavigate();    

    const [isEditing, setIsEditing] = useState(false);
    const [editedAccount, setEditedAccount] = useState<Partial<typeof account>>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

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
        setLoading(true);
        setError(''); // Clear any previous errors
        try {
            await updateAccount(editedAccount);        
            await fetchAccount();
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = error.response.data.message || 'Failed to update account. Please try again.';
                setError(errorMessage);
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        } finally {
            setIsEditing(false);
            setEditedAccount({});
            setLoading(false);
        }
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
            <Card id="create-account-form" className="w-form-card-mobile md:w-form-card-md lg:w-form-card-lg h-fit gap-y-6 mb-16">
                <h3>Account</h3>
                { !account || loading ? 
                    <div className="w-full h-full flex justify-center items-center"><Spinner /></div>
                    :
                    <>
                        <div id="account-info" className="flex flex-col gap-y-4">
                            {accountEntries.map(([key, value]: [string, any] | any[], _index: number, _array: any[][]) => (
                                <div key={key}>
                                    <p>{key}</p>
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
                    </>
                }
            </Card>
            <Footer/>
        </Page>
    );
};

export default Account;
