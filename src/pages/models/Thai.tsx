
import "./ThaiGallery.css";

const Thai = () => {
  return (
    <div className="modelsWrapper">
      {/* Main image */}
      <img className="modelsImg" src="../src/assets/TITLE-THAI.png" alt="" />

      {/* Models Grid */}
      <div className="mrrModelsGrid">
        {/* Row 1 */}
        <div className="mrrRow">
          <div className="mrrModelCard">
            <img src="../src/assets/Artboard 10.png" alt="" />
          </div>
          <div className="mrrModelCard">
            <img src="../src/assets/Artboard 11.png" alt="" />
          </div>
          <div className="mrrModelCard">
            <img src="../src/assets/Artboard 12.png" alt="" />
          </div>
          <div className="mrrModelCard">
            <img src="../src/assets/Artboard 13.png" alt="" />
          </div>
        </div>
        {/* You can add more rows here later */}
      </div>
    </div>
  );
};

export default Thai;
