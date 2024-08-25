import { useEffect } from 'react';
import { Gradient } from '@components/Gradient'; // Adjust the import according to your setup

const useGradient = (selector: string) => {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient(selector);

        return () => {
            // Cleanup if necessary
        };
    }, [selector]);
};

export default useGradient;
