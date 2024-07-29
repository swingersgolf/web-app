

const TextButton = ({ text }: { text: string }) => {
    return (
        <button className="text-center w-full px-4 py-3 bg-dark-green text-light text-lg font-alternative font-semibold rounded-md">{text}</button>
    );
}

export default TextButton;
