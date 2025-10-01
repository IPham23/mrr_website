import "./Infocus.css";

const Infocus = () => {
    return(
        <>
        <div className="infocus wrapper">
            <img className="infocusImg" src="/src/assets/infocus.png" alt="" />

            <section className="runwayModels">
                <h1>Runway Models</h1>
                <div className="runwayModelsGrid">
                    <div className="row1">
                        <div className="runwayModelsItem">
                            <img src="./src/assets/Artboard-1.png" alt="" />
                        </div>
                        <div className="runwayModelsItem">
                            <img src="./src/assets/Artboard-2.png" alt="" />
                        </div>
                        <div className="runwayModelsItem">
                            <img src="./src/assets/Artboard-3.png" alt="" />
                        </div>
                        <div className="runwayModelsItem">
                            <img src="./src/assets/Artboard-4.png" alt="" />
                        </div>
                    </div>
                    <div className="row2">
                        <div className="runwayModelsItem">
                            <img src="./src/assets/Artboard-5.png" alt="" />
                        </div>
                        <div className="runwayModelsItem">
                            <img src="./src/assets/Artboard-6.png" alt="" />
                        </div>
                        <div className="runwayModelsItem">
                            <img src="./src/assets/Artboard-7.png" alt="" />
                        </div>
                        <div className="runwayModelsItem">
                            <p>Become part of a vibrant community celebrating youth, talent, and fashion.</p>
                            <div className="buttonContainer">
                                <div className="buttonWrapper">
                                    <button><span>Contact Us</span></button>
                                    <img className="icon" src="./src/assets/Icon-weather-stars.svg" alt="" />
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </section>
            <section className="performers">
                <h1>Performers</h1>
                <p>Showcase your talents and be known. Here are our Model / Performers from The Voice Kids.</p>
                <div className="performersGrid">
                    <div className="performersImageWrapper">
                        <img src="./src/assets/Performer-1.jpg" alt="Performer 1" />
                    </div>
                    <div className="performersImageWrapper">
                        <img src="./src/assets/Performer-2.jpg" alt="Performer 2" />
                    </div>
                    <div className="performersImageWrapper">
                        <img src="./src/assets/Performer-3.jpg" alt="Performer 3" />
                    </div>
                </div>
            </section>

        </div>

        </>
    );
};

export default Infocus;