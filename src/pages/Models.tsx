import { useState } from "react";
import "./ModelsGallery.css"; // Import custom CSS

const models = [
  "/src/assets/Artboard 1.png",
  "/src/assets/Artboard 2.png",
  "/src/assets/Artboard 3.png",
  "/src/assets/Artboard 4.png",
  "/src/assets/Artboard 5.png",
  "/src/assets/Artboard 6.png",
  "/src/assets/Artboard 7.png",
  "/src/assets/Artboard 8.png",
];

const Models: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 bg-white text-center">
      {/* Heading */}
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="text-gray-600">
          Whether you are an aspiring model looking to break into the industry
          or a parent seeking the best opportunities for your child, Manila
          Runway Republic is the perfect place to start. Join us and be a part
          of a vibrant community that celebrates youth, talent, and fashion.
        </p>
      </div>

      {/* Image Grid */}
      <div className="gallery-grid">
        {models.map((img, idx) => (
          <div
            key={idx}
            className={`gallery-item item-${idx + 1}`}
            onClick={() => setSelectedImage(img)}
          >
            <div className="slant-wrapper">
              <img src={img} alt={`Model ${idx + 1}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
          role="button"
          aria-label="close modal"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected model" />
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Models;
