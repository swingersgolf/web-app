import { useNavigate } from "react-router-dom";
import IconLogo from "@assets/branding/IconLogo.svg";

const Footer = () => {
    const navigate = useNavigate();
    return (
        // <div id="footer" className="flex flex-row justify-between w-full py-24 border-t border-dark">
        //     <div id="contact-info" className="flex flex-col justify-between">
        //         <LogoButton/>
        //         <p id="copyright" className="hover:text-text text-md font-medium">© 2021 SwingersGolf, Inc.</p>
        //     </div>
        //     <div className="flex flex-row gap-x-8">
        //         <div id="pages" className="flex flex-col justify-start items-start gap-y-2">
        //             <p className="text-md font-semibold">Pages</p>
        //             <div className="flex flex-col justify-start items-start gap-y-1">
        //                 <button className="hover:text-text text-md font-medium" onClick={() => navigate("/")}>Home</button>
        //                 <button className="hover:text-text text-md font-medium" onClick={() => navigate("/postings")}>Postings</button>
        //             </div>                
        //         </div>
        //         <div id="resources" className="flex flex-col justify-start items-start gap-y-2">
        //             <p className="text-md font-semibold">Resources</p>
        //             <div className="flex flex-col justify-start items-start gap-y-1">
        //                 <button className="hover:text-text text-md font-medium" onClick={() => navigate("/privacy")}>Privacy & terms</button>
        //                 <button className="hover:text-text text-md font-medium" onClick={() => navigate("/contact")}>Contact</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div id="footer" className="flex justify-center items-center relative bottom-0 text-dark border-t border-opacity-50 border-dark 2xl:h-96 md:h-80 2xl:py-20 py-16">
            <div className="h-full justify-evenly items-center flex flex-col md:grid md:grid-cols-2 2xl:w-page-2xl lg:w-page-lg md:w-page-md w-page-default gap-y-8">
                <div className="flex flex-row justify-start md:justify-end items-start gap-x-16 w-full h-full row-start-1 col-start-2">
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <div className="text-xs 2xl:text-sm text-dark text-opacity-70 font-alternative">PAGES</div>
                        <div className="text-base font-medium 2xl:text-lg hover:cursor-pointer"
                             onClick={() => navigate("/")}>
                            Home
                        </div>
                        <div className="text-base font-medium 2xl:text-lg hover:cursor-pointer"
                             onClick={() => navigate("/postings")}>
                            Postings
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <div className="text-xs 2xl:text-sm text-dark text-opacity-70 font-alternative">RESOURCES</div>
                        <div className="text-base font-medium 2xl:text-lg hover:cursor-pointer"
                             onClick={() => navigate("/")}>
                            Privacy & terms
                        </div>
                        <div className="text-base font-medium 2xl:text-lg hover:cursor-pointer"
                             onClick={() => navigate("/postings")}>
                            Contact
                        </div>
                    </div>
                </div>
                <div className="w-full md:flex hidden h-full flex-col items-start justify-start row-start-1 col-start-1">
                    {/* <LilypadIcon className={"w-20 h-20 2xl:h-24 2xl:w-24"}/> */}
                    <img src={IconLogo} alt="SwingersGolf Logo" className="w-20 h-20 2xl:h-24 2xl:w-24"/>
                </div>
                <div className="col-start-1 row-start-2 w-full h-full flex flex-col justify-end items-start">
                    <div className="font-medium text-base 2xl:text-lg">© 2021 SwingersGolf, Inc.</div>
                    <div className="text-sm 2xl:text-base text-dark text-opacity-70">Thanks for visiting!</div>
                </div>
                <div className="col-start-2 row-start-2 flex flex-col h-full w-full items-start md:items-end justify-end">
                    <div className="text-xs 2xl:text-sm text-dark text-opacity-70">
                        For when your regular partner isn't cutting it!
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;
