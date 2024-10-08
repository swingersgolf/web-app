

const Card = ({ children, id, className }: { children: React.ReactNode, id?: string, className?: string }) => {
    return (
        <div id={id} className={`${className} flex flex-col bg-white shadow-card rounded-lg p-6 md:p-16 z-30`}>
            {children}
        </div>
    );
}

export default Card;
