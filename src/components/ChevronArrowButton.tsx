import "../styles/ChevronArrow.css";
import ChevronArrow from "./ChevronArrow";

interface ChevronArrowButtonProps {
    onClick: () => void;
    text: string;
    background?: boolean;
}

const ChevronArrowButton = ({ onClick, text, background }: ChevronArrowButtonProps) => {
    const backgroundClass = background ? 'bg-green-800' : 'bg-transparent';

    return (
        <button 
            onClick={onClick} 
            className={`flex flex-row justify-between items-center button-arrow ${backgroundClass} gap-x-1 py-1 px-4 rounded-full text-white`}
        >
            {text}
            <ChevronArrow strokeWidth={2}/>
        </button>
    );
};

export default ChevronArrowButton;
