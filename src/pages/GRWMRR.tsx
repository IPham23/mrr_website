

import grwmrr1 from "../assets/grwmrr1.png";
import grwmrr2 from "../assets/grwmrr2.png";
import grwmrr3 from "../assets/grwmrr3.png";
import grwmrr4 from "../assets/grwmrr4.png";
import rising1 from "../assets/rising1.png";
import rising2 from "../assets/rising2.png";
import rising3 from "../assets/rising3.png";
import rising4 from "../assets/rising4.png";
import rising5 from "../assets/rising5.png";
import rising6 from "../assets/rising6.png";
import rising7 from "../assets/rising7.png";
import rising8 from "../assets/rising8.png";

const GRWMRR: React.FC = () => {
  const images = [grwmrr1, grwmrr2, grwmrr3, grwmrr4];

  const groups = [
    { caption: "Young Designers in Action", imgs: [rising1, rising2] },
    { caption: "Future Runway Models", imgs: [rising3, rising4] },
    { caption: "Creative Stylists", imgs: [rising5, rising6] },
    { caption: "Rising Icons", imgs: [rising7, rising8] },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ----------------- */}
      {/* First Section */}
      {/* ----------------- */}
      <div className="w-full my-8">
        <div className="max-w-[40%] mx-auto">
          <img
            src="/src/assets/mrr.png"
            alt="mrr"
            className="w-full h-auto block"
          />
        </div>
      </div>

      <div className="bg-white max-w-[1200px] mx-auto px-8 py-16 text-center">
        <h2 className="text-xl text-gray-600 mb-8 font-medium">
          Rehearsals & Coaching Sessions
        </h2>

        {/* Flexbox layout for first image section */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full md:w-[45%] transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`grwmrr-${index}`}
                className="rounded-lg shadow-md w-full max-w-[600px] mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ----------------- */}
      {/* Second Section */}
      {/* ----------------- */}
      <div className="w-screen bg-gray-300 py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8">
          <h1 className="text-3xl font-bold text-center mb-4">Rising Stars</h1>
          <h2 className="text-xl text-gray-600 text-center mb-12">
            Shaping the Future of Fashion from a Young Age
          </h2>

          {groups.map((group, index) => (
            <div key={index} className="mb-20 text-left">
              <div className="text-lg font-semibold text-gray-800 mb-8">
                {group.caption}
              </div>

              {/* Flexbox layout for image groups */}
              <div className="flex flex-wrap justify-center items-start gap-20 mb-16">
                {group.imgs.map((img, i) => (
                  <div
                    key={i}
                    className="w-full md:w-[45%] transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={img}
                      alt={`rising-${index}-${i}`}
                      className="rounded-lg w-full max-w-[500px] mx-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------- */}
      {/* Hero Section */}
      {/* ----------------- */}
      <section className="text-center py-12 px-8">
        <p className="text-3xl text-gray-700 mb-4 font-serif">
          Manila Runway Republic is where your journey begins.
        </p>
        <p className="text-3xl text-gray-700 mb-8 font-serif">
          Join us as we celebrate youth, talent, and fashion.
        </p>

        <button className="bg-gray-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-900">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default GRWMRR;
