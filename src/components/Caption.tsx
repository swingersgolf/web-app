import { useNavigate } from "react-router-dom";
import "@styles/ChevronArrow.css";
import ChevronArrow from "@components/ChevronArrow.tsx";

interface CaptionProps {
    text: string;
    route: string;
}

const Caption = ({ text, route }: CaptionProps) => {
    const navigate = useNavigate();
    return (
        <div id="caption" className="flex flex-row items-center justify-start text-caption text-xs font-normal bg-caption bg-opacity-50 w-fit rounded-full px-3 py-1">
            <div>{text}</div> <span>&nbsp;&mdash;&nbsp;</span> <button className="button-arrow flex flex-row items-center justify-start gap-x-1" onClick={() => navigate(route)}>Read more<ChevronArrow/></button>
        </div>
    );
};

export default Caption;
