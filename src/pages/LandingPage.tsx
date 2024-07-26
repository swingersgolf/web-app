import Navbar from "../components/Navbar";
import HeroBackground from "../assets/HeroBackground.svg";
import HeroGolfer from "../assets/HeroGolfer.svg";
import Caption from "../components/Caption";
import WordSome from "../components/WordSome";

const LandingPage = () => {
    return (
        <div id="landing-page" className="flex flex-col items-center justify-center w-272 gap-y-10">
            <img src={HeroBackground} id="hero-background" alt="hero-background" className="w-screen h-auto fixed inset-0 inline-block -z-50"/>
            <img src={HeroGolfer} id="hero-golfer" alt="hero-golfer" className="fixed w-80 h-auto top-1/3 right-20"/>
            <Navbar/>
            <div id="hero" className="flex flex-col justify-start w-full">
                <div id="hero-content" className="flex flex-col w-2/3 gap-y-8">
                    <Caption text="Swingers endorsed by John Doe" route="/idk"/>
                    <h1>Golf platform to fill out your <WordSome/>some</h1>
                    <div id="try-now-links" className="flex flex-row">
                        <a href="">Try now on iPhone</a>
                        <a href="">Try now on Android</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
