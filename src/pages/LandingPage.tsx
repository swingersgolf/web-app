import Navbar from "../components/Navbar";
import LandingPageBackground from "../assets/LandingPageBackground.svg";
import Background from "../assets/Background.svg";
import Caption from "../components/Caption";
import AnimatedWordSwap from "../animations/AnimatedWordSwap/AnimatedWordSwap";
import DownloadButtons from "../components/DownloadButtons";

const LandingPage = () => {
    return (
        <div id="landing-page" className="flex flex-col items-center justify-center w-272 gap-y-8">
            <img src={LandingPageBackground} id="hero-background" alt="hero-background" className="w-screen h-auto absolute inset-0 inline-block -z-50"/>
            <Navbar/>
            <div id="hero" className="flex flex-col justify-start w-full">
                <div id="hero-content" className="flex flex-col w-1/2 gap-y-10">
                    <Caption text="Swingers endorsed by John Doe" route="/idk"/>
                    <h1>Golf matchmaker to fill your <AnimatedWordSwap words={["two", "three", "four"]}/>some</h1>
                    <p>
                        Join the community of golfers that use Swingers, meet new partners, improve your game, track progress, and have fun!
                    </p>
                    <DownloadButtons/>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
