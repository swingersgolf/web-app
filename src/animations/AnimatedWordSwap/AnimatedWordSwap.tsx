import { useState, useEffect } from 'react';
import './AnimatedWordSwap.css';

const getRandomWord = (words: string[], currentWord: string) => {
    let newWord;
    do {
        newWord = words[Math.floor(Math.random() * words.length)];
    } while (newWord === currentWord);
    return newWord;
};

const AnimatedWordSwap = ({words}: { words: string[] }) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimation('fade-out');
            setTimeout(() => {
                setCurrentWord(prevWord => {
                    const newWord = getRandomWord(words, prevWord);
                    return newWord;
                });
                setAnimation('fade-in');
            }, 300); // Matches fade-out duration
        }, 4000); // Change word every 4 seconds

        return () => clearInterval(intervalId);
    }, [words]);

    return (
        <span className={`animated-word ${animation}`}>
            {currentWord}
        </span>
    );
};

export default AnimatedWordSwap;
