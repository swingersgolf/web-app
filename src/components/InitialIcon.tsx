import React from 'react';

interface InitialIconProps {
    name: string;
}

const InitialIcon: React.FC<InitialIconProps> = ({ name }) => {
    // Split the name into words and filter out any empty strings
    const words = name.trim().split(' ').filter(word => word.length > 0);
    
    // Get the first and last initial, or just the first if there's only one word
    const initials = words.length > 1
        ? `${words[0][0]}${words[words.length - 1][0]}`
        : words[0][0];

    return (
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-caption text-center">
            {initials.toUpperCase()}
        </div>
    );
}

export default InitialIcon;
