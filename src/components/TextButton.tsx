

const TextButton = ({ text, onClick }: { text: string, onClick: () => void }) => {
    return (
        <button onClick={onClick} className="text-center w-full px-4 py-3 bg-dark-green text-light text-lg font-alternative font-semibold rounded-md">{text}</button>
    );
}

export default TextButton;
