

const Card = ({ children, id, className }: { children: React.ReactNode, id?: string, className?: string }) => {
    return (
        <div id={id} className={`${className} flex flex-col bg-light shadow-card p-16`}>
            {children}
        </div>
    );
}

export default Card;
