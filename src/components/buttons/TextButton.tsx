

interface TextButtonProps { 
    text: string, 
    onClick?: () => void, 
    type?: "submit" | "reset" | "button", 
    id?: string, 
    ariaLabel: string,
    className?: string
}

const TextButton = ({ text, onClick, type = "button", id, ariaLabel, className }: TextButtonProps ) => {
    return (
        <button id={id} type={type} onClick={onClick} aria-label={ariaLabel} className={`${className} text-center px-4 py-3 bg-dark-green text-light text-lg font-alternative font-semibold rounded-md`}>{text}</button>
    );
}

export default TextButton;
