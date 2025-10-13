import "./Mainboard.css";

const Mainboard = () => {
    return (
        <>
        <div className="flex flex-col overflow-hidden! justify-center w-full m-0 py-25">
            {/* TOP SECTION - KIDS */}
            <section className="sm:overflow-x-auto sm:ml-0 md:overflow-x-visible md:ml-20 relative">
                <button className="sm:ml-5 lg:max-xl:text-4xl md:max-xl:-ml-5 absolute text-5xl border-none bg-transparent font-extrabold mt-[50px] cursor-pointer z-[1000]">KIDS</button>
                <div className="sm:flex sm:flex-nowrap sm:min-w-max md:grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-0">
                    {/* Kids Text Left */}
                    <div className="sm:h-[270px] lg:max-xl:h-[240px] xl:max-2xl:h-[300px] grid grid-rows-6 h-[400px] absolute z-[-1]">
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[10px] w-30 translate-x-[70px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[-10px] w-30 translate-x-[40px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[-30px] w-30 translate-x-[10px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[-50px] w-30 translate-x-[-20px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[-70px] w-30 translate-x-[-50px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[-90px] w-30 translate-x-[-80px]" src="./src/assets/kidsText.png" alt="" />
                    </div>
                    
                     {/* Kids Photos */}
                    <div className="sm:ml-[-20px] lg:max-xl:ml-[-30px] xl:max-2xl:ml-[10px] opacity-0 animate-[fadeInDown_0.8s_ease-out_forwards]">
                        <img className="sm:max-w-[415px] lg:max-xl:w-[400px] xl:max-w-[725px] max-w-[800px] grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:-translate-y-2.5" 
                            src="./src/assets/K1.1.png" 
                            alt="Kid 1" 
                        />
                    </div>
                    <div className="sm:ml-[-200px] lg:max-xl:ml-[-80px] xl:max-2xl:ml-[-50px] opacity-0 animate-[fadeInDown_0.8s_ease-out_0.3s_forwards] ml-[-100px]">
                        <img className="sm:max-w-[415px] lg:max-xl:w-[400px] xl:max-w-[725px] max-w-[800px] grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:-translate-y-2.5"
                             src="./src/assets/K2.1.png" 
                             alt="Kid 2" 
                        />
                    </div>
                    <div className="sm:ml-[-150px] lg:max-xl:ml-[-130px] xl:max-2xl:ml-[-110px] opacity-0 animate-[fadeInDown_0.8s_ease-out_0.6s_forwards] ml-[-180px]">
                        <img className="sm:max-w-[415px] lg:max-xl:w-[400px] xl:max-w-[725px] max-w-[800px] grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:-translate-y-2.5"
                             src="./src/assets/K3.1.png" 
                             alt="Kid 3" 
                        />
                    </div>
                    <div className="sm:ml-[-150px] lg:max-xl:ml-[-180px] xl:max-2xl:ml-[-230px] opacity-0 animate-[fadeInDown_0.8s_ease-out_0.9s_forwards] ml-[-260px]">
                        <img className="sm:max-w-[415px] lg:max-xl:w-[400px] xl:max-w-[725px] max-w-[800px] grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:-translate-y-2.5"
                             src="./src/assets/K4.1.png" 
                             alt="Kid 4" 
                        />
                    </div>

                    {/* Kids Text Right */}
                    <div className="sm:h-[270px] sm:relative xl:max-2xl:right-5 lg:max-xl:h-[240px] xl:max-2xl:h-[300px] grid grid-rows-6 h-[400px] md:max-2xl:absolute z-[-1] right-0">
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[40px] w-30 translate-x-[30px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[20px] w-30 translate-x-[0px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[0px] w-30 translate-x-[-30px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[-20px] w-30 translate-x-[-60px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[-40px] w-30 translate-x-[-90px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 lg:max-xl:w-25 lg:max-xl:translate-x-[-60px] w-30 translate-x-[-120px]" src="./src/assets/kidsText.png" alt="" />
                    </div>
                </div>
            </section>
            {/* CENTER SECTION */}
            <section className="w-full bg-[var(--accent)] text-[var(--bg)] text-center m-0 mt-[-50px] top-1/2 z-[1000]">
                <h1 className="sm:text-4xl sm:py-5  lg:max-xl:text-[40px] md:max-2xl:text-[76px] font-medium">MANILA RUNWAY REPUBLIC MODELS</h1>
            </section>

            {/* BOTTOM SECTION - TEENS */}
            <section className="sm:overflow-x-auto sm:ml-0 md:overflow-x-visible md:ml-20 mt-[-50px] relative">
                 <button className="sm:ml-5 lg:max-xl:text-4xl absolute text-5xl border-none bg-transparent font-extrabold mt-[100px] md:ml-[-50px] cursor-pointer z-[1000]">TEENS</button>
                <div className="sm:flex sm:flex-nowrap sm:min-w-max md:grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-0">
                    {/* Teens Text Left */}
                    <div className="sm:h-[300px] lg:max-xl:h-[300px] xl:max-2xl:h-[340px] pt-[50px] grid grid-rows-6 h-[450px] absolute z-[-1]">
                        <img className="sm:w-25 sm:translate-x-[10px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[0px] w-45 translate-x-[-10px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:translate-x-[-10px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[-20px] w-45 translate-x-[-40px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:translate-x-[-30px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[-40px] w-45 translate-x-[-70px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:translate-x-[-50px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[-60px] w-45 translate-x-[-100px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:translate-x-[-70px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[-80px] w-45 translate-x-[-130px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:translate-x-[-90px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[-100px] w-45 translate-x-[-160px]" src="./src/assets/teensText.png" alt="" />
                    </div>

                    {/* Teens Photos */}
                    <div className="lg:max-xl:ml-[0px] xl:max-2xl:ml-[10px] opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
                        <img className="sm:max-w-[415px] lg:max-xl:w-[400px] xl:max-w-[725px] max-w-[800px] grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:translate-y-2.5"
                             src="./src/assets/T1.1.png" 
                             alt="Teen 1" 
                        />
                    </div>
                    <div className="sm:ml-[-200px] lg:max-xl:ml-[-50px] xl:max-2xl:ml-[-50px] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] ml-[-100px]">
                        <img className="sm:max-w-[415px] lg:max-xl:w-[400px] xl:max-w-[725px] max-w-[800px] grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:translate-y-2.5"
                             src="./src/assets/T2.1.png" 
                             alt="Teen 2" 
                        />
                    </div>
                    <div className="sm:ml-[-150px] lg:max-xl:ml-[-100px] xl:max-2xl:ml-[-110px] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] ml-[-180px]">
                        <img className="sm:max-w-[415px] lg:max-xl:w-[400px] xl:max-w-[725px] max-w-[800px] grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:translate-y-2.5"
                             src="./src/assets/T3.1.png" 
                             alt="Teen 3" 
                        />
                    </div>
                    <div className="sm:ml-[-150px] lg:max-xl:ml-[-150px] xl:max-2xl:ml-[-190px] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.9s_forwards] ml-[-260px]">
                        <img className="sm:max-w-[415px] lg:max-xl:w-[400px] xl:max-w-[725px] max-w-[800px] grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:translate-y-2.5"
                             src="./src/assets/T4.1.png" 
                             alt="Teen 4" 
                        />
                    </div>
                    
                    {/* Teens Text Right */}
                    <div className="sm:h-[300px] sm:relative lg:max-xl:right-5 xl:max-2xl:right-10 lg:max-xl:h-[300px] xl:max-2xl:h-[340px] pt-[50px] grid grid-rows-6 h-[450px] md:max-2xl:absolute z-[-1] right-0">
                        <img className="sm:w-25 sm:translate-x-[-10px]  lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[90px] w-45 translate-x-[70px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:translate-x-[-30px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[70px] w-45 translate-x-[40px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:translate-x-[-50px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[50px] w-45 translate-x-[10px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:translate-x-[-70px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[30px] w-45 translate-x-[-20px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:translate-x-[-90px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[10px] w-45 translate-x-[-50px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:translate-x-[-110px] lg:max-xl:w-25 xl:max-2xl:w-30 lg:max-xl:translate-x-[-10px] w-45 translate-x-[-80px]" src="./src/assets/teensText.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Mainboard;