

const TextButton = ({ text, onClick, type = "button", id }: { text: string, onClick?: () => void, type?: "submit" | "reset" | "button", id?: string }) => {
    return (
        <button id={id} type={type} onClick={onClick} className="text-center w-full px-4 py-3 bg-dark-green text-light text-lg font-alternative font-semibold rounded-md">{text}</button>
    );
}

export default TextButton;
