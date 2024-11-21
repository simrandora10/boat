import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const AddReviews = () => {
  const [ratings, setRatings] = useState({
    overall: 0,
    batteryBackup: 0,
    buildQuality: 0,
    valueForMoney: 0,
    bassQuality: 0,
  });

  const [hoverRatings, setHoverRatings] = useState({
    overall: 0,
    batteryBackup: 0,
    buildQuality: 0,
    valueForMoney: 0,
    bassQuality: 0,
  });

  const [reviewText, setReviewText] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(ratings).some((rating) => rating === 0)) {
      alert("Please provide ratings for all categories.");
      return;
    }

    const reviewData = {
      ratings,
      review: reviewText,
    };

    console.log("Review Submitted:", reviewData);

    // Reset form
    setRatings({
      overall: 0,
      batteryBackup: 0,
      buildQuality: 0,
      valueForMoney: 0,
      bassQuality: 0,
    });
    setHoverRatings({
      overall: 0,
      batteryBackup: 0,
      buildQuality: 0,
      valueForMoney: 0,
      bassQuality: 0,
    });
    setReviewText("");

    // Success feedback
    alert("Thank you for your review!");
    navigate("/");
  };

  // Render rating stars
  const renderStars = (category) => (
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={28}
          className={`cursor-pointer transition-transform duration-200 ${
            (hoverRatings[category] || ratings[category]) >= star
              ? "text-yellow-500 scale-125"
              : "text-gray-300"
          }`}
          onClick={() =>
            setRatings((prev) => ({
              ...prev,
              [category]: star,
            }))
          }
          onMouseEnter={() =>
            setHoverRatings((prev) => ({
              ...prev,
              [category]: star,
            }))
          }
          onMouseLeave={() =>
            setHoverRatings((prev) => ({
              ...prev,
              [category]: 0,
            }))
          }
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Add Your Review
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Ratings Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Overall Rating:
              </label>
              {renderStars("overall")}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Battery Backup:
              </label>
              {renderStars("batteryBackup")}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Build Quality:
              </label>
              {renderStars("buildQuality")}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Value for Money:
              </label>
              {renderStars("valueForMoney")}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Bass Quality:
              </label>
              {renderStars("bassQuality")}
            </div>
          </div>

          {/* Review Text Area */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Your Review:
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-shadow"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-lg font-medium text-lg transition-transform hover:scale-105"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
