import "./Mainboard.css";

const Mainboard = () => {
    return (
        <>
        <div className="mainboard wrapper">
            <section className="top">
                <button className="kidsBtn">KIDS</button>
                <div className="kidsGrid">
                    <div className="kidsTextLeft">
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                    </div>

                    <div className="photoWrapper"><img className="kidsPhotos" src="./src/assets/K1.1.png" alt="Kid 1" /></div>
                    <div className="photoWrapper"><img className="kidsPhotos" src="./src/assets/K2.1.png" alt="Kid 2" /></div>
                    <div className="photoWrapper"><img className="kidsPhotos" src="./src/assets/K3.1.png" alt="Kid 3" /></div>
                    <div className="photoWrapper"><img className="kidsPhotos" src="./src/assets/K4.1.png" alt="Kid 4" /></div>

                    <div className="kidsTextRight">
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                    </div>
                </div>

            </section>
            <section className="center">
                <h1>MANILA RUNWAY REPUBLIC MODELS</h1>
            </section>

            <section className="bottom">
                 <button className="teensBtn">TEENS</button>
                <div className="teensGrid">
                    <div className="teensTextLeft">
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                    </div>

                    <div className="photoWrapper"><img className="teensPhotos" src="./src/assets/T1.1.png" alt="Teen 1" /></div>
                    <div className="photoWrapper"><img className="teensPhotos" src="./src/assets/T2.1.png" alt="Teen 2" /></div>
                    <div className="photoWrapper"><img className="teensPhotos" src="./src/assets/T3.1.png" alt="Teen 3" /></div>
                    <div className="photoWrapper"><img className="teensPhotos" src="./src/assets/T4.1.png" alt="Teen 4" /></div>
                    
                    <div className="teensTextRight">
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Mainboard;