import Navbar from "@components/app/Navbar";
import Page from "@components/Page";


const Home = () => {
    return (
        <Page id="app-home">
            <Navbar/>
            {/* <div className="hero-trapezoid-background bg-light-green absolute inset-0"></div> */}
            <h1>App Home</h1>
        </Page>
    );
};

export default Home;
