

const Page = ({children, id}: {children: React.ReactNode, id?: string}) => {
    return (
        <main id={id} className="flex flex-col items-center justify-center w-272 gap-y-8">
            {children}
        </main>
    );
}  

export default Page;
