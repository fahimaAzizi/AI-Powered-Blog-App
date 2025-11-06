import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { dummyShowsData } from "../assets/assets";
import BlurCircle from "./BlurCircle";

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-between pt-20 pb-16">
      <BlurCircle top="0" right="-80px" />

      {/* Section Header */}
      <div className="flex items-center justify-between w-full max-w-6xl px-4">
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <button
          onClick={() => navigate("/movies")}
          className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer"
        >
          View All
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
        </button>
      </div>

      {/* Movie Cards Section */}
      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8 px-4">
        {dummyShowsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary/80 transition rounded-md font-medium cursor-pointer"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
