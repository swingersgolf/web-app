import Navbar from "../components/Navbar";
import LandingPageBackground from "../assets/LandingPageBackground.svg";
import Caption from "../components/Caption";
import AnimatedWordSwap from "../animations/AnimatedWordSwap/AnimatedWordSwap";
import DownloadButtons from "../components/DownloadButtons";
import LogoGrid from "../components/LogoGrid";
import GolfNowLogo from '../assets/logos/GolfNowLogo.svg';

const Hero = () => {
    return (
        <div id="hero" className="flex flex-col justify-start w-full min-h-screen">
            <div id="hero-content" className="flex flex-col w-1/2 gap-y-10">
                <Caption text="Swingers endorsed by John Doe" route="/idk"/>
                <h1>Golf matchmaker to fill your <AnimatedWordSwap words={["two", "three", "four"]}/>some</h1>
                <p>
                    Join the community of golfers that use Swingers, meet new partners, improve your game, track progress, and have fun!
                </p>
                <DownloadButtons/>
            </div>
        </div>
    )
}

const LogoGrid = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-12 w-full py-24 place-items-center">
            <img src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto col-start-1 row-start-1'/>
            <img src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto col-start-2 row-start-1'/>
            <img src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto col-start-3 row-start-1'/>
            <img src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto col-start-4 row-start-1'/>
            <img src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto col-start-1 row-start-2'/>
            <img src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto col-start-2 row-start-2'/>
            <img src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto col-start-3 row-start-2'/>
            <img src={GolfNowLogo} alt='GolfNow Logo' className='w-44 h-auto col-start-4 row-start-2'/>
        </div>
    );
}


const LandingPage = () => {
    return (
        <div id="landing-page" className="flex flex-col items-center justify-center w-272 gap-y-8">
            <img src={LandingPageBackground} id="hero-background" alt="hero-background" className="w-screen h-auto absolute inset-0 inline-block -z-50"/>
            <Navbar/>
            <Hero/>
            <LogoGrid/>
        </div>
    );
}

export default LandingPage;
