import { Link } from "@remix-run/react";
import DownloadAppStore from "~/components/assets/DownloadAppStore";
import DownloadGooglePlay from "~/components/assets/DownloadGooglePlay";

interface DownloadButtonsProps {
    className?: string;
}

const DownloadButtons = ({className}: DownloadButtonsProps) => {
    return (
        <div className={className}>
            <Link to="appstore"><DownloadAppStore /></Link>
            <Link to="googleplay"><DownloadGooglePlay /></Link>
        </div>
    )
}

export default DownloadButtons;
