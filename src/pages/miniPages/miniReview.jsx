import React from "react";
import ReviewImage from "../../images/reviewback/reviewback.png";
import UserAvatar from "../../images/reviewback/womanImage.jpg";
import SendIcon from "../../images/reviewback/SendIcon.png";
import { useNavigate } from "react-router-dom";

const ReviewSection = () => {
  const navigate = useNavigate();

  const handlePrevPage = () => {
    navigate("/review");
  };
  return (
    <div className="relative  font-[Poppins] rounded-lg shadow-lg p-6 overflow-hidden  ">
      {/* Right-side Content */}
      <div className="relative z-10 ml-auto w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 ">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#115C86] leading-tight text-right">
          Leave Your <br /> Review
        </h1>

        <p className="text-gray-900 text-xs sm:text-sm mt-2 text-right">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard text since the
          1500s.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-end">
          <button
            onClick={handlePrevPage}
            className="bg-[#0057FF] text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <span>✎</span> Write Review
          </button>
          <button
            onClick={handlePrevPage}
            className="bg-[#0057FF] text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <span>👁</span> Show all
          </button>
        </div>

        {/* Reviews List */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((review) => (
            <div
              key={review}
              className="bg-gradient-to-r from-[#E6ECF8] to-[#C7D1F4] p-4 sm:p-5 rounded-2xl shadow-lg flex items-center gap-4 relative z-20"
            >
              {/* Profile Image */}
              <div className="w-10 h-10 sm:w-12 sm:h-12">
                <img
                  src={UserAvatar}
                  alt="User Avatar"
                  className="w-full h-full rounded-full object-cover shadow-md border-2 border-white"
                />
              </div>

              {/* Review Text */}
              <div className="flex-1">
                <h4 className="font-semibold text-[#213653] text-base sm:text-lg">
                  Maal Gammage
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Business analyst
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input Box */}
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-2xl bg-[#E6F3FB] p-1 rounded-full flex items-center shadow-md mx-auto">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Write your comment here................"
              className="flex-1 bg-transparent border-none outline-none px-4 text-gray-500 text-sm sm:text-base"
            />

            <button
              onClick={handlePrevPage}
              className="p-3 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <img
                src={SendIcon}
                alt="Send"
                className="w-6 h-6 object-contain"
              />
            </button>
          </div>
        </div>




        
      </div>

      {/* Left-side Image - Responsive */}
      <div className="absolute left-0 top-6 w-[90%] sm:w-[75%] md:w-[65%] h-full xl:h-full lg:h-full z-0">
        <img
          src={ReviewImage}
          alt="Woman with hat"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ReviewSection;
