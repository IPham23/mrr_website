import "./ModelsGallery.css";

const Models = () => {
    return (
        <div className="modelsWrapper">
            <img className="modelsImg" src="/src/assets/models.png" alt="" />

            <section className="textjoinus">
                <h1>Join Us Today!</h1>
                <h2>
                    Whether you are an aspiring model looking to break into the industry or a parent seeking the best opportunities for your child, Manila Runway Republic is the perfect place to start. Join us and be a part of a vibrant community that celebrates youth, talent, and fashion.
                </h2>
                <div className="mrrModelsGrid">
                    {/* Row 1 */}
                    <div className="mrrRow">
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 1.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 2.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 3.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 4.png" alt="" /></div>
                    </div>

                    {/* Row 2 */}
                    <div className="mrrRow">
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 5.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 6.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 7.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 8.png" alt="" /></div>
                    </div>

                    {/* Row 3 */}
                    <div className="mrrRow">
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 9.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 10.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 11.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 12.png" alt="" /></div>
                    </div>

                    {/* Row 4 */}
                    <div className="mrrRow">
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 13.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 14.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 15.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 16.png" alt="" /></div>
                    </div>

                    {/* Row 5 */}
                    <div className="mrrRow">
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 17.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 18.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 19.png" alt="" /></div>
                        <div className="mrrModelCard"><img src="./src/assets/Artboard 20.png" alt="" /></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Models;