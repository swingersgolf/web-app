import Page from "@components/Page";
import TextButton from "@components/buttons/TextButton";
import Card from "@components/Card";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { useAuth } from "@contexts/AuthContext";

const Account = () => {
    const { signOut } = useAuth();
    
    return (
        <Page id="register">
            <Navbar/>
            <div className="trapezoid-background-2 bg-primary" />
            <Card id="create-account-form" className="w-form-card-mobile md:w-form-card-md lg:w-form-card-lg h-fit gap-y-6 mb-16">
                <h3>Account</h3>
                    <>
                        <div id="account-info" className="flex flex-col gap-y-4">
                        </div>
                        <div className="flex gap-y-4 flex-col md:flex-row justify-between items-start md:items-center">
                            <div className="flex flex-row items-center gap-x-4">
                                    <>
                                        <TextButton text="Save" ariaLabel="Save account changes button"/>
                                        <TextButton text="Cancel" ariaLabel="Cancel editing account button" backgroundColor="bg-neutral-mediumDark"/>
                                    </>
                                
                            </div>
                            <TextButton onClick={signOut} text="Sign out" ariaLabel="Sign out button" backgroundColor="bg-neutral-mediumDark"/>
                        </div>
                    </>
            </Card>
            <Footer/>
        </Page>
    );
};

export default Account;
