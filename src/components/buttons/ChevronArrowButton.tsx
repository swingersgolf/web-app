import "@styles/ChevronArrow.css";
import ChevronArrow from "@components/ChevronArrow";

interface ChevronArrowButtonProps {
    onClick: () => void;
    text: string;
    background?: boolean;
    ariaLabel: string;
}

const ChevronArrowButton = ({ onClick, text, background, ariaLabel }: ChevronArrowButtonProps) => {
    const backgroundClass = background ? 'bg-light' : 'bg-transparent';
    const textClass = background ? 'text-light-green' : 'text-light';

    return (
        <button 
            onClick={onClick} 
            className={`flex flex-row justify-between items-center button-arrow ${backgroundClass} ${textClass} gap-x-1 py-1 px-4 rounded-full`}
            aria-label={ariaLabel}
        >
            {text}
            <ChevronArrow/>
        </button>
    );
};

export default ChevronArrowButton;
