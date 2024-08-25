import { useState, useEffect, useRef, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TfiArrowTopRight } from "react-icons/tfi";

interface MenuOption {
    name: string;
    handleClick: () => void;
}

interface IconMenuProps {
    initialIcon: ReactNode;
    toggleIcon: ReactNode;
    menuOptions: MenuOption[];
}

const IconMenu: React.FC<IconMenuProps> = ({ initialIcon, toggleIcon, menuOptions }) => {
    const [isToggled, setIsToggled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsToggled(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={menuRef}>
            <IconMorph 
                initialIcon={initialIcon} 
                toggleIcon={toggleIcon} 
                isToggled={isToggled} 
                setIsToggled={setIsToggled} 
            />
            <MenuModal 
                menuOptions={menuOptions} 
                isToggled={isToggled} 
                setIsToggled={setIsToggled} 
            />
        </div>
    );
};

interface IconMorphProps {
    initialIcon: ReactNode;
    toggleIcon: ReactNode;
    isToggled: boolean;
    setIsToggled: (value: boolean) => void;
}

const IconMorph: React.FC<IconMorphProps> = ({ initialIcon, toggleIcon, isToggled, setIsToggled }) => {
    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div
            className="flex justify-center items-center font-medium bg-neutral-dark w-12 h-12 rounded-full bg-opacity-30 text-sm border border-opacity-10 border-neutral-dark backdrop-blur cursor-pointer"
            onClick={handleClick}
        >
            <motion.div
                animate={{ rotate: isToggled ? 360 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {isToggled ? toggleIcon : initialIcon}
            </motion.div>
        </div>
    );
};

interface MenuModalProps {
    menuOptions: MenuOption[];
    isToggled: boolean;
    setIsToggled: (value: boolean) => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ menuOptions, isToggled, setIsToggled }) => {
    const handleOptionClick = (handleClick: () => void) => {
        handleClick();  // Execute the specific action
        setIsToggled(false);  // Close the menu after the action
    };

    return (
        <AnimatePresence>
            {isToggled && (
                <motion.div
                    className="absolute top-full right-0 w-32 mt-2 p-4 gap-y-4 flex flex-col justify-center items-start font-medium bg-neutral-dark rounded-xl bg-opacity-30 text-sm border border-opacity-10 border-neutral-dark backdrop-blur"
                    initial={{
                        opacity: 0,
                        scale: 0,
                        originX: 0.5,
                        originY: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.5 },
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0,
                        transition: { duration: 0.25 },
                    }}
                >
                    {menuOptions.map((option, index) => (
                        <button
                            key={index}
                            className="flex flex-row w-full justify-between items-center text-left focus:outline-none"
                            onClick={() => handleOptionClick(option.handleClick)}
                        >
                            <span className="flex flex-row justify-start items-center text-sm">
                                {option.name}
                            </span>
                            <TfiArrowTopRight style={{ height: "0.875rem", width: "auto" }} />
                        </button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IconMenu;
