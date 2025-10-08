import "./Home.css";


const Home = () => {
  return (
    <>
    <div className="max-w-[1600px] mx-auto overflow-x-hidden">
      <section className="lg:max-2xl:mx-[0px] lg:max-xl:ml-[20px] xl:max-2xl:ml-[144px] lg:max-2xl:text-lg w-1/2 mx-[210px] pt-20">
        <img src="/src/assets/MANILA.png" alt="Manila" />
        <p className="lg:max-xl:px-0 xl:max-2xl:px-25 lg:max-2xl:ml-20 px-30 py-10 text-center">
          Welcome to Manila Runway Republic, the ultimate destination for young
          fashion enthusiasts! We are dedicated to nurturing the talents of
          aspiring models and creating high-quality events for kids and teens. Our
          platform offers a comprehensive range of opportunities, from
          professional photoshoots to dazzling fashion shows.
        </p>
        <img className="lg:max-2xl:pr-0 justify-self-end pr-16" src="/src/assets/RUNWAY.png" alt="Runway" />

      </section>
      <section className="lg:max-2xl:translate-y-[-55%] lg:max-2xl:grid lg:max-2xl:grid-cols-4 lg:max-2xl:px-0 w-100% px-30 flex items-end justify-center translate-y-[-45%]">
        <img src="/src/assets/HomeImg1.png" 
            alt="Home Image 1" 
            className="lg:max-xl:ml-[20px] xl:max-2xl:ml-[90px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
        />
        <img src="/src/assets/HomeImg2.png" 
            alt="Home Image 2" 
            className="lg:max-xl:ml-[20px] xl:max-2xl:ml-[90px] ml-[-70px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
        />
        <img src="/src/assets/HomeImg3.png" 
            alt="Home Image 3" 
            className="lg:max-xl:ml-[20px] xl:max-2xl:ml-[90px] ml-[-70px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
        />
        <img src="/src/assets/HomeImg4.png" 
            alt="Home Image 4" 
            className="lg:max-xl:ml-[-60px] xl:max-2xl:ml-[0px] ml-[-145px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
        />

      </section>
      <section className="lg:max-2xl:translate-y-[-60%] lg:max-2xl:px-5 px-20 translate-y-[-80%]">
        <h2 className="text-2xl font-bold mb-4">Brand Partners</h2>
        <div className="flex w-[100%] gap-8 justify-around">
          <div className="flex justify-center items-center">
            <img src="/src/assets/logos/AlicioThailand.jpg" 
                alt="Alicio Thailand logo" 
                className="w-50"
            />
          </div>
          <div className="flex justify-center items-center">
            <img src="/src/assets/logos/Diesel.jpg" 
                alt="Diesel logo" 
                className="w-50"
            />
          </div>
          <div className="flex justify-center items-center">
            <img src="/src/assets/logos/DKNY.jpg" 
                alt="DKNY logo" 
                className="w-50"
            />
          </div>
        </div>
      </section>
    </div>
      
    </>
  );
};

export default Home;

