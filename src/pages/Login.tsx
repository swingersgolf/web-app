import Card from "../components/Card";
import Page from "./Page";
import BannerLogo from "../assets/branding/BannerLogo.svg";
import TextButton from "../components/TextButton";
import Legal from "../components/Legal";

const Login = () => {

    const handleSignIn = () => {
        console.log('Sign in');
    };

    return (
        <Page id="login">
            <div className="trapezoid-background bg-dark-green"/>
            <div id="login-content" className="flex flex-col justify-start gap-y-8 py-16">
                <img src={BannerLogo} alt="banner-logo" className="w-40"/>
                <Card id="sign-in-form" className="w-form-card h-fit gap-y-8">
                    <h3>Sign in to your account</h3>
                    <div>
                        <p>Email</p>
                        <input type="text" className="w-full"/>
                    </div>
                    <div>
                        <div className="flex flex-row justify-between items-center">
                            <p>Password</p>
                            <a href="/forgot-password" className="text-light-green">Forgot your password?</a>
                        </div>
                        <input type="password" className="w-full"/>
                    </div>                    
                    <TextButton text="Sign In" onClick={handleSignIn}/>
                    <div className="flex justify-center items-center text-center">
                        New to Swingers?&nbsp;<a href="/register" className="text-light-green">Create an account</a>
                    </div>
                </Card>
                <Legal/>
            </div>
        </Page>
    );
}

export default Login;
