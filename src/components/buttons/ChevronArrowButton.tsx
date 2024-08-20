import "@styles/ChevronArrow.css";
import ChevronArrow from "@components/ChevronArrow";

interface ChevronArrowButtonProps {
    onClick: () => void;
    text: string;
    background?: boolean;
    ariaLabel: string;
    className?: string;
}

const ChevronArrowButton = ({ onClick, text, background, ariaLabel, className }: ChevronArrowButtonProps) => {
    const backgroundClass = background ? ' bg-dark bg-opacity-30 border border-opacity-10 border-dark' : 'bg-transparent';
    const textClass = background ? 'text-light' : 'text-light';

    return (
        <button 
            onClick={onClick} 
            className={`${className} flex flex-row justify-between items-center button-arrow ${backgroundClass} ${textClass} gap-x-1 py-1 px-4 rounded-full backdrop-blur`}
            aria-label={ariaLabel}
        >
            {text}
            <ChevronArrow/>
        </button>
    );
};

export default ChevronArrowButton;
