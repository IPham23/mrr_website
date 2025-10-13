

const Models = () => {
  return (
    <div className="w-full py-24">
      {/* Header image */}
      <img
        className="ml-24 w-[250px] max-md:ml-5 max-md:w-[200px]"
        src="/src/assets/models.png"
        alt="Manila Runway Republic"
      />

      {/* Text section */}
      <section className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-medium mb-4 max-sm:text-3xl">Join Us Today!</h1>
        <h2 className="text-lg font-normal leading-relaxed px-32 mt-5 max-md:px-10 max-sm:px-5 max-sm:text-base">
          Whether you are an aspiring model looking to break into the industry or a parent seeking
          the best opportunities for your child, Manila Runway Republic is the perfect place to
          start. Join us and be a part of a vibrant community that celebrates youth, talent, and
          fashion.
        </h2>

        {/* Model Cards Grid */}
        <div className="flex flex-col gap-12 px-24 lg:max-2xl:px-0 mt-12 max-lg:px-10 max-md:px-6">
          {/* Helper row generator */}
          {[
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
            [17, 18, 19, 20],
          ].map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap justify-center gap-7"
            >
              {row.map((n) => (
                <div
                  key={n}
                  className="relative w-[340px] h-[360px] overflow-hidden cursor-pointer transform skew-x-[-20deg] max-lg:w-[300px] max-lg:h-[320px] max-md:w-[240px] max-md:h-[280px] max-sm:w-full max-sm:h-[220px]"
                >
                  <img
                    src={`/src/assets/Artboard ${n}.png`}
                    alt={`Model ${n}`}
                    className="absolute top-0 left-0 w-full h-full object-cover transform skew-x-[20deg] scale-[1.5] translate-y-[12%] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.4] hover:translate-y-[2%]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Models;
