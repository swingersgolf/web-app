

const Page = ({children, id, className}: {children: React.ReactNode, id: string, className?: string}) => {
    return (
        <main id={id} className={`${className} flex flex-col items-center justify-start w-mobile-page md:w-md-page lg:w-lg-page gap-y-8 min-h-screen z-10`}>
            {children}
        </main>
    );
}  

export default Page;
