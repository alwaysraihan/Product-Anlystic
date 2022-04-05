import React from "react";
import appleTv from "../assets/image/apple-tv.png";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/solid";
import useReviews from "../hooks/useReviews";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews] = useReviews();
  const navigrate = useNavigate();
  const seeAllReviews = () => {
    navigrate("/reviews");
  };
  return (
    <>
      <div className="home-container my-24 flex justify-center flex-col md:flex-row items-center px-[10%] xl:px-[15%]   gap-[5%] md:grid-cols-2">
        <div className="left-side md:w-[50%] order-1">
          <h1 className="text-4xl xl:text-5xl font-bold">
            All Apple Originals.
          </h1>
          <h1 className="text-blue-600 my-3 md:my-5 text-4xl  xl:text-5xl font-bold">
            On Apple TV+
          </h1>
          <p>
            Apple TV 4K (2nd generation) brings the best of TV together with
            access to your favorite Apple services. Its 4K High Frame Rate HDR,
            with Dolby Atmos sound capabilities. You can enjoy content from
            Apple TV+, Amazon Prime Video, Netflix, and Disney+, as well as live
            channels from Hulu, YouTube TV, and Sling TV.⁵
          </p>
          <div className="flex w-36 justify-center text-white items-center cursor-pointer mt-5 hover:bg-blue-500 rounded px-3 py-2 bg-blue-600">
            <button>Buy now </button>
            <ShoppingCartIcon className="w-6 ml-3" />
          </div>
        </div>
        <div className="right-side md:w-[50%] md:order-2">
          <img className="w-full" src={appleTv} alt="iphone 13 pro" />
        </div>
      </div>
      {/* Reviews section   */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 md:gap-[5%] my-16 px-3 md:px-[10%] lg:px-[15%]">
        {reviews.slice(0, 3).map((review) => (
          <div
            key={review._id}
            className="border-0 rounded shadow-xl  shadow-gray-300   grid items-center p-5 justify-center hover:shadow-gray-400 relative transition-all delay-75 ease-in-out pb-5"
          >
            <img
              src={review.img}
              className="w-36 h-36 border border-blue-600 rounded-[50%]"
              alt="user_profile"
            />
            <h1 className="text-2xl font-black mt-3  font-mono">
              {review.author}
            </h1>
            <p>{review.text}</p>
            <p>Date: {review.created}</p>
            <div className="absolute bottom-0 right-5  mb-4 flex justify-center items-center">
              <p> Rate: {review.rating}</p>
              <StarIcon className="w-4 text-yellow-400 ml-3" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10">
        <button
          onClick={seeAllReviews}
          className="px-4 py-2 text-xl bg-blue-600 rounded cursor-pointer text-white"
        >
          See all reviews
        </button>
      </div>
    </>
  );
};

export default Home;
