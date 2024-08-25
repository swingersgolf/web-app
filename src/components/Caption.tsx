import { useNavigate } from "react-router-dom";
import "@styles/ChevronArrow.css";
import ChevronArrow from "@components/ChevronArrow";

interface CaptionProps {
    text: string;
    route: string;
}

const Caption = ({ text, route }: CaptionProps) => {
    const navigate = useNavigate();
    return (
        <div id="caption" className="flex flex-row items-center justify-start text-neutral-light text-xs font-normal w-fit rounded-full px-3 py-1  bg-neutral-dark bg-opacity-30 border border-opacity-10 border-neutral-dark backdrop-blur">
            <div>{text}</div> <span>&nbsp;&mdash;&nbsp;</span> <button className="button-arrow flex flex-row items-center justify-start gap-x-1" onClick={() => navigate(route)}>Read more<ChevronArrow/></button>
        </div>
    );
};

export default Caption;
