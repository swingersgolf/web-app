import Navbar from "@components/Navbar";
import HomePage from "@assets/mockups/HomePage.svg";
import Caption from "@components/Caption";
import AnimatedWordSwap from "@animations/AnimatedWordSwap/AnimatedWordSwap";
import DownloadButtons from "@components/buttons/DownloadButtons";
import UndrawTeam from "@assets/UndrawTeam.svg";
import UndrawGolfer from "@assets/UndrawGolfer.svg";
import GolfNowLogo from '@assets/logos/GolfNowLogo.svg';
import Footer from "@components/Footer";
import "@styles/DivStyles.css";
import Page from "@components/Page";
import useGradient from "@hooks/useGradient";

const Hero = () => {
    return (
        <div id="hero" className="flex flex-col justify-start w-full relative">
            <img src={HomePage} alt="home-page-mockup" className="w-[1000px] h-auto absolute left-2/3 hidden md:flex"/>
            <div id="hero-content" className="flex flex-col md:w-[60%] gap-y-10">
                <Caption text="Swingers endorsed by John Doe" route="/idk"/>
                <h1>Golf matchmaker to fill your 
                    <AnimatedWordSwap words={["two", "three", "four"]}/>some
                </h1>
                <p>Join the community of golfers on Swingers and meet new partners to improve your game. Track your progress, have fun, enhance your golfing experience, and make lifelong friends today!</p>
                <DownloadButtons/>
            </div>
        </div>
    )
}

const PartnersGrid = () => {
    return (
        <div id="partners-grid" className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 gap-12 w-full py-16 md:py-24 place-items-center">
            <img id="golf-now-logo" src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto md:col-start-1 md:row-start-1'/>
            <img id="golf-now-logo" src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto md:col-start-2 md:row-start-1'/>
            <img id="golf-now-logo" src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto md:col-start-3 md:row-start-1'/>
            <img id="golf-now-logo" src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto md:col-start-4 md:row-start-1'/>
            <img id="golf-now-logo" src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto md:col-start-1 md:row-start-2'/>
            <img id="golf-now-logo" src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto md:col-start-2 md:row-start-2'/>
            <img id="golf-now-logo" src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto md:col-start-3 md:row-start-2'/>
            <img id="golf-now-logo" src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto md:col-start-4 md:row-start-2'/>
        </div>
    );
}

const ExpandYourNetwork = () => {
    return (
        <div id="expand-your-network" className="flex flex-row w-full items-start justify-center py-16 md:py-24 md:gap-x-32">
            <div id="expand-your-network-text-container" className="flex flex-col md:w-2/3 gap-y-8">
                <div className="flex flex-col gap-y-2">
                    <h2>Connect With New Partners and Expand Your Golf Network</h2>
                    <p>
                        Our platform connects golfers like never before, allowing you to meet new partners and expand your golf network. 
                        With a wide range of golfers from beginners to professionals, you'll have the opportunity to play with players of all skill levels.
                    </p>
                </div>
                <div className="flex flex-row gap-x-2">
                    <div className="flex flex-col gap-y-2">
                        <h3>Improve game</h3>
                        <p>Playing with different partners can help you improve your game by learning new strategies and techniques.</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3>Enjoy more</h3>
                        <p>With our platform, you'll have more opportunities to play golf and enjoy more rounds.</p>
                    </div>
                </div>
            </div>
            <div id="expand-your-network-image-container" className="hidden md:flex w-1/3">
                <img id="expand-your-network-image" src={UndrawTeam} alt="team" className="w-full h-auto"/>
            </div>
        </div>
    );
}

const FindYourPartner = () => {
    return (
        <div id="find-your-partner" className="flex flex-col justify-center items-center text-center py-16 md:py-24 gap-y-8 md:gap-y-16">
            <div className="hidden md:flex parallelogram-background bg-dark-green"></div>
            <div className="flex md:hidden parallelogram-background-mobile bg-dark-green"></div>
            <div className="flex flex-col gap-y-0 md:gap-y-2">
                <h2 className="text-light-header">Find your golf partner and start playing</h2>
                <p className="text-light-text">Join our platform and discover a community of golfers ready to play. Sign up, find a golf partner, and start enjoying the game today.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-8 w-full">
                <div className="flex flex-col items-center justify-center gap-y-0 md:gap-y-2 md:w-1/3">
                    <h4>Sign up and create your profile</h4>
                    <p className="text-light-text">Create your profile and let others know your golfing preferences and availability.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-0 md:gap-y-2 md:w-1/3">
                    <h4>Find golf partners near you</h4>
                    <p className="text-light-text">Browse through a list of golfers in your area and connect with potential partners.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-0 md:gap-y-2 md:w-1/3">
                    <h4>Schedule a game and enjoy golfing</h4>
                    <p className="text-light-text">Coordinate with your golf partner, choose a golf course, and have a great time playing golf together.</p>
                </div>
            </div>
            <div>
                <DownloadButtons/>
            </div>
        </div>
    )
}

const DiscoverThePower = () => {
    return (
        <div id="discover-the-power" className="flex flex-row w-full items-start justify-center py-16 md:py-24 md:gap-x-32">
            <div id="discover-the-power-text-container" className="flex flex-col md:w-2/3 gap-y-8">
                <div className="flex flex-col gap-y-2">
                    <h2>Discover the Power of Our Golf Partner Matching Platform</h2>
                    <p>Join our community of golfers and experience the thrill of finding the perfect playing partners. With our platform, you'll never have to golf alone again.</p>
                </div>
                <div className="flex flex-row gap-x-2">
                    <div className="flex flex-col gap-y-2">
                        <h3>50% Increase</h3>
                        <p>Users finding their ideal golf partners through our platform</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3>50% Increase</h3>
                        <p>Successful matches leading to memorable golf games</p>
                    </div>
                </div>
            </div>
            <div id="discover-the-power-image-container" className="hidden md:flex w-1/3">
                <img id="discover-the-power-image" src={UndrawGolfer} alt="golfer" className="w-full h-auto"/>
            </div>
        </div>
    );
}

const Testimonials = () => {
    return (
        <div id="testimonials" className="flex flex-col justify-center items-center text-center py-16 md:py-24 gap-y-8">
            <h3>★★★★★</h3>
            <h3>I have had an amazing experience using this platform. It has helped me connect with other golfers and find partners to play with.</h3>
            <div className="flex flex-row">
                <p>John Doe — Google Reviews</p>
            </div>
        </div>
    )
}

const LandingPage = () => {
    useGradient("#gradient-canvas");
    return (
        <Page id="landing-page">
            <canvas className="hero-gradient hidden md:flex absolute inset-0" id="gradient-canvas" data-transition-in />
            <canvas className="hero-gradient-mobile flex md:hidden absolute inset-0" id="gradient-canvas" data-transition-in />
            <Navbar/>
            <Hero/>
            <PartnersGrid/>
            <ExpandYourNetwork/>
            <FindYourPartner/>
            <DiscoverThePower/>
            <Testimonials/>
            <Footer/>
        </Page>
    );
}

export default LandingPage;
