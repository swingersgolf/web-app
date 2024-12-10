import { Link } from "@remix-run/react";
import DownloadAppStore from "~/components/assets/DownloadAppStore";
import DownloadGooglePlay from "~/components/assets/DownloadGooglePlay";

interface DownloadButtonsProps {
    className?: string;
}

const DownloadButtons = ({className}: DownloadButtonsProps) => {
    const notReleased = true;
    if (notReleased) {
        return (
            <div className={className}>
                <div className="h-10 md:h-16">In development...</div>
            </div>
        )
    }
    return (
        <div className={className}>
            <Link to="appstore"><DownloadAppStore className="h-10 md:h-16"/></Link>
            <Link to="googleplay"><DownloadGooglePlay className="h-10 md:h-16"/></Link>
        </div>
    )
}

export default DownloadButtons;
