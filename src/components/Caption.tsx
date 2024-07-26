import { useNavigate } from "react-router-dom";
import "../styles/ChevronArrow.css";
import ChevronArrow from "./ChevronArrow";

interface CaptionProps {
    text: string;
    route: string;
}

const Caption = ({ text, route }: CaptionProps) => {
    const navigate = useNavigate();
    return (
        <div id="caption" className="flex flex-row items-center justify-start text-white text-xs font-semibold bg-gray-900 bg-opacity-50 w-fit rounded-full px-3 py-1">
            <p>{text}</p> <span>&nbsp;&mdash;&nbsp;</span> <button className="button-arrow flex flex-row items-center justify-start gap-x-1" onClick={() => navigate(route)}>Read more<ChevronArrow strokeWidth={1}/></button>
        </div>
    );
};

export default Caption;
