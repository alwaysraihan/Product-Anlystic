import React from "react";
import appleTv from "../assets/image/apple-tv.png";

const Home = () => {
  return (
    <>
      <div className="home-container my-24 flex justify-center flex-col md:flex-row items-center px-[10%] xl:px-[15%]   gap-5 md:grid-cols-2">
        <div className="left-side md:w-[50%] order-1">
          <h1 className="text-4xl xl:text-5xl font-bold">
            All Apple Originals.
          </h1>
          <h1 className="text-blue-600 my-3 md:my-5 text-4xl  xl:text-5xl font-bold">
            {" "}
            on Apple TV+
          </h1>
          <p>
            Apple TV 4K (2nd generation) brings the best of TV together with
            access to your favorite Apple services. Its 4K High Frame Rate HDR,
            with Dolby Atmos sound capabilities. You can enjoy content from Apple TV+, Amazon Prime Video,
            Netflix, and Disney+, as well as live channels from Hulu, YouTube
            TV, and Sling TV.⁵
          </p>
        </div>
        <div className="right-side md:w-[50%] md:order-2">
          <img className="w-full" src={appleTv} alt="iphone 13 pro" />
        </div>
      </div>
    </>
  );
};

export default Home;
