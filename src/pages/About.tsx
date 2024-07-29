import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Page from "./Page";


const About = () => {
    return (
        <Page id="about">
            <div className="hero-trapezoid-background bg-light-green absolute inset-0"></div>
            <Navbar/>
            <h1 className="text-4xl font-black">About</h1>
            <p className="text-lg font-semibold">Coming soon...</p>
            <Footer/>
        </Page>
    );
}

export default About;
