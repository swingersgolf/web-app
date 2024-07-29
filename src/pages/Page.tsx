

const Page = ({children, id, className}: {children: React.ReactNode, id?: string, className?: string}) => {
    return (
        <main id={id} className={`${className} flex flex-col items-center justify-center w-272 gap-y-8`}>
            {children}
        </main>
    );
}  

export default Page;
