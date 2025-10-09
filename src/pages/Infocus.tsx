import "./Infocus.css";
import { useState } from "react";
import Lightbox from "../components/Lightbox";

const Infocus = () => {

    {/*Lightbox */}

      const [isOpen, setIsOpen] = useState(false);
        const [activeImage, setActiveImage] = useState("");

        const openLightbox = (src: string) => {
            setActiveImage(src);
            setIsOpen(true);
        };

    {/*Infocus Main */}
    return(
        <>
        <div className="w-full py-25">
            <img className="ml-25 w-[250px]" src="/src/assets/infocus.png" alt="" />
            {/*RUNWAY MODELS SECTION */}
            <section className="flex flex-col items-center justify-center">
                <h1 className="text-[40px] font-medium">Runway Models</h1>
                <div className="flex flex-col gap-5 py-5 px-20">
                    {/*Row 1 */}
                    <div className="lg:max-xl:pl-[100px] lg:max-xl:min-h-[250px] xl:max-xl:min-h-[300px] xl:max-xl:pl-[120px] pl-[140px] grid grid-cols-4 gap-5 min-h-[360px] justify-items-start">
                        <div className="lg:max-xl:h-[250px] xl:max-xl:h-[300px] relative overflow-hidden h-[360px] z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-1.png")}>
                                <img className="block w-full h-auto object-cover skew-x-[20deg] scale-[1.6] translate-y-[80px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]" 
                                     src="./src/assets/Artboard-1.png" 
                                     alt="Model 1" 
                                />
                            </div> 
                        </div>
                        <div className="lg:max-xl:h-[250px] xl:max-xl:h-[300px] relative overflow-hidden h-[360px] z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-2.png")}>
                                    <img className="block w-full h-auto object-cover skew-x-[20deg] scale-[1.6] translate-y-[80px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]" 
                                         src="./src/assets/Artboard-2.png" 
                                         alt="Model 2" 
                                    />
                            </div> 
                        </div>
                        <div className="lg:max-xl:h-[250px] xl:max-xl:h-[300px] relative overflow-hidden h-[360px] z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-3.png")}>
                                    <img className="block w-full h-auto object-cover skew-x-[20deg] scale-[1.6] translate-y-[80px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]" 
                                         src="./src/assets/Artboard-3.png" 
                                         alt="Model 3" 
                                    />
                            </div> 
                            
                        </div>
                        <div className="lg:max-xl:h-[250px] xl:max-xl:h-[300px] relative overflow-hidden h-[360px] z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-4.png")}>
                                    <img className="block w-full h-auto object-cover skew-x-[20deg] scale-[1.6] translate-y-[80px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]"
                                         src="./src/assets/Artboard-4.png"
                                        alt="Model 4" 
                                    />
                            </div> 
                        </div>
                    </div>
                    {/*Row 2 */}
                    <div className="lg:max-xl:pr-[80px] lg:max-xl:min-h-[250px] xl:max-xl:min-h-[300px]  pr-[140px] grid grid-cols-4 gap-5 min-h-[360px] justify-items-start">
                        <div className="lg:max-xl:h-[250px] xl:max-xl:h-[300px] relative overflow-hidden h-[360px] z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-5.png")}>
                                    <img className="lg:max-xl:translate-y-[60px] block w-full h-auto object-cover skew-x-[20deg] scale-[1.6] translate-y-[70px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]"
                                         src="./src/assets/Artboard-5.png" 
                                         alt="Model 5" 
                                    />
                            </div>                    
                        </div>
                        <div className="lg:max-xl:h-[250px] xl:max-xl:h-[300px] relative overflow-hidden h-[360px] z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-6.png")}>
                                    <img className="lg:max-xl:translate-y-[60px] block w-full h-auto object-cover skew-x-[20deg] scale-[1.6] translate-y-[70px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]"
                                         src="./src/assets/Artboard-6.png" 
                                         alt="Model 6" 
                                    />
                            </div>          
                        </div>
                        <div className="lg:max-xl:h-[250px] xl:max-xl:h-[300px] relative overflow-hidden h-[360px] z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-7.png")}>
                                    <img className="lg:max-xl:translate-y-[60px] block w-full h-auto object-cover skew-x-[20deg] scale-[1.6] translate-y-[70px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]"
                                         src="./src/assets/Artboard-7.png" 
                                         alt="Model 7" 
                                    />  
                            </div> 
                        </div>
                        {/*Contact Us tile*/}
                        <div className="lg:max-xl:h-[250px] xl:max-xl:h-[300px] lg:max-xl:max-w-[280px] lg:max-xl:ml-[20px] relative bg-[var(--bg)] text-[var(--text)] flex flex-col justify-center items-center p-5 gap-[30px] ml-10 mr-[-140px]">
                            <p className="lg:max-xl:text-xl text-3xl mb-5">Become part of a vibrant community celebrating youth, talent, and fashion.</p>
                            <div className="w-[350px]">
                                <div className="flex justify-end group">
                                    <a className="flex justify-end group" href="http://localhost:5173/contact">
                                        <button className="lg:max-xl:text-[1rem] relative bg-[var(--bg)] text-[var(--text)] border-solid border-3 rounded-[26px] px-6 py-3 text-[1.8rem] 
                                                        cursor-pointer overflow-hidden transition-colors duration-400 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[var(--text)] before:z-0 before:transition-all before:duration-400 before:ease-in-out hover:before:w-full">
                                            <span className="lg:max-xl:text-xl relative text-3xl tracking-wider z-[1] group-hover:text-[var(--bg)] transition-colors duration-400 ease-in-out">Contact Us</span>
                                        </button>
                                        <img className="translate-x-[-30px] h-[50px] w-[50px] opacity-0 transition-all duration-400 ease-in-out group-hover: group-hover:translate-y-[-40px] group-hover:translate-x-0 group-hover:opacity-100" 
                                            src="./src/assets/Icon-weather-stars.svg" 
                                            alt="" 
                                        />
                                    </a>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </section>
            {/*PERFORMERS SECTION */}
            <section className="flex flex-col items-center justify-center pb-25">
                <h1 className="text-[40px] font-medium py-[100px]">Performers</h1>
                <p className="text-xl pb-[60px]">Showcase your talents and be known. Here are our Model / Performers from The Voice Kids.</p>
                <div className="lg:max-xl:px-[150px] xl:max-xl:px-[200px] flex gap-[90px] px-[288px] w-full justify-between">
                    <div
                        className="performersImageWrapper cursor-pointer"
                        onClick={() => openLightbox("./src/assets/Performer-1.jpg")}>
                        <img
                            className="w-full h-auto object-cover shadow-[3px_3px_20px_0px_rgba(0,0,0,0.4)]"
                            src="./src/assets/Performer-1.jpg"
                            alt="Performer 1"
                        />
                    </div>
                    <div
                        className="performersImageWrapper cursor-pointer"
                        onClick={() => openLightbox("./src/assets/Performer-2.jpg")}>
                        <img
                            className="w-full h-auto object-cover shadow-[3px_3px_20px_0px_rgba(0,0,0,0.4)]"
                            src="./src/assets/Performer-2.jpg"
                            alt="Performer 2"
                        />
                    </div>
                    <div
                        className="performersImageWrapper cursor-pointer"
                        onClick={() => openLightbox("./src/assets/Performer-3.jpg")}>
                        <img
                            className="w-full h-auto object-cover shadow-[3px_3px_20px_0px_rgba(0,0,0,0.4)]"
                            src="./src/assets/Performer-3.jpg"
                            alt="Performer 3"
                        />
                    </div>
                </div>
            </section>
            {/*EVENTS SECTION */}
            <section className="lg:max-xl:px-[100px] flex flex-col items-center justify-center pb-25 px-40 bg-[#cfcfcf]">
                <h1 className="text-[40px] font-medium pt-[20px]">Events</h1>
                <p className="text-xl pb-[60px]">Here’s a sneak peek at our international stage.</p>
                <div className="lg:max-xl:gap-[60px] grid grid-cols-3 gap-30">
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-1.png" alt="Event 1" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-2.png" alt="Event 2" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-3.png" alt="Event 3" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-4.png" alt="Event 4" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-5.png" alt="Event 5" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-6.png" alt="Event 6" />
                    </div>
                </div>
            </section>

            {/* Lightbox instance */}
            <Lightbox
                src={activeImage}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
        </>
    );
};

export default Infocus;