import PreOrderOnAppStore from "@assets/badges/PreOrderOnAppStore.svg";
import PreRegisterOnGooglePlay from "@assets/badges/PreRegisterOnGooglePlay.png";

const DownloadButtons = () => {
    return (
        <div id="try-now-links" className="flex flex-row gap-x-6" aria-label="App Download Buttons">
            <a href="https://apps.apple.com/your-app-id" target="_blank" rel="noopener noreferrer" aria-label="App Store Download Button">
                <img src={PreOrderOnAppStore} alt="Download on the App Store" className="h-12 w-auto"/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer" aria-label="Google Play Download Button">
                <img src={PreRegisterOnGooglePlay} alt="Get it on Google Play" className="h-12 w-auto"/>
            </a>
        </div>  
    )
}

export default DownloadButtons;
