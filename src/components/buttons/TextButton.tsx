

interface TextButtonProps { 
    text: string, 
    onClick?: () => void, 
    type?: "submit" | "reset" | "button", 
    id?: string, 
    ariaLabel: string 
}

const TextButton = ({ text, onClick, type = "button", id, ariaLabel }: TextButtonProps ) => {
    return (
        <button id={id} type={type} onClick={onClick} aria-label={ariaLabel} className="text-center w-full px-4 py-3 bg-dark-green text-light text-lg font-alternative font-semibold rounded-md">{text}</button>
    );
}

export default TextButton;
