

interface TextButtonProps { 
    text: string, 
    onClick?: () => void, 
    type?: "submit" | "reset" | "button", 
    id?: string, 
    ariaLabel: string,
    className?: string
    backgroundColor?: string
}

const TextButton = ({ text, onClick, type = "button", id, ariaLabel, className, backgroundColor }: TextButtonProps ) => {
    if (!backgroundColor) {
        backgroundColor = "bg-primary-light";
    }

    return (
        <button id={id} type={type} onClick={onClick} aria-label={ariaLabel} className={`${className} ${backgroundColor} text-center px-4 py-3  text-neutral-light text-lg font-alternative font-semibold rounded-md`}>{text}</button>
    );
}

export default TextButton;
