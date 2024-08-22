import { useState } from "react";
import Page from "@components/Page";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import TextButton from "@components/buttons/TextButton";
import { FiX } from "react-icons/fi";

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
        <Page id="account">
            <div className="hidden md:flex irregular-background bg-dark-green" />
            <div className="flex md:hidden irregular-background-mobile bg-dark-green" />
            <div id="account-content" className="flex flex-col justify-start items-start w-full relative my-16 gap-y-8">
                <div className="flex flex-col items-end absolute top-0 right-0 h-full justify-between">
                    <div
                        className="flex justify-center items-center font-medium bg-dark w-12 h-12 rounded-full bg-opacity-30 text-sm border border-opacity-10 border-dark backdrop-blur cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <FiX className="text-primary w-9 h-9"/>
                    </div>
                    <TextButton onClick={handleSignOut} text="Sign out" ariaLabel="Sign out button" backgroundColor="bg-dark bg-opacity-30"/>
                </div>
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
            </div>
        </Page>
    );
};

export default Account;
