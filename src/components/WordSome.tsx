import { useState, useEffect } from 'react';
import '../styles/WordSome.css'; // Make sure to create this CSS file

const words = ["two", "three", "four"];

const getRandomWord = (currentWord: string) => {
    let newWord;
    do {
        newWord = words[Math.floor(Math.random() * words.length)];
    } while (newWord === currentWord);
    return newWord;
};

const WordSome = () => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimation('fade-out');
            setTimeout(() => {
                setCurrentWord(prevWord => {
                    const newWord = getRandomWord(prevWord);
                    return newWord;
                });
                setAnimation('fade-in');
            }, 300); // Matches fade-out duration
        }, 2000); // Change word every 2 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <span className={`animated-word ${animation}`}>
            {currentWord}
        </span>
    );
};

export default WordSome;
