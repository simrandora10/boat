import React, { useState } from "react";

const initialReviews = [
  {
    id: 1,
    ratings: {
      overall: 5,
      batteryBackup: 4,
      buildQuality: 5,
      valueForMoney: 4,
      bassQuality: 5,
    },
    review: "Amazing product! The sound quality is superb, and the battery lasts long enough for my needs.",
  },
  {
    id: 2,
    ratings: {
      overall: 4,
      batteryBackup: 3,
      buildQuality: 4,
      valueForMoney: 4,
      bassQuality: 4,
    },
    review: "Good product, but the battery backup could be better.",
  },
  {
    id: 3,
    ratings: {
      overall: 3,
      batteryBackup: 3,
      buildQuality: 3,
      valueForMoney: 3,
      bassQuality: 2,
    },
    review: "Average product for the price. Build quality needs improvement.",
  },
];

const ReviewsManage = () => {
  const [reviews, setReviews] = useState(initialReviews);

  // Handle delete review
  const handleDelete = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
    alert("Review has been deleted successfully.");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Manage Reviews</h1>
          <p className="text-gray-600 mt-2">View and manage user-submitted reviews for products.</p>
        </div>

        {/* Reviews Section */}
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No reviews available.</p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Ratings */}
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <strong className="text-gray-800">Overall Rating:</strong>{" "}
                    {renderStars(review.ratings.overall)}
                  </div>
                  <div>
                    <strong className="text-gray-800">Battery Backup:</strong>{" "}
                    {renderStars(review.ratings.batteryBackup)}
                  </div>
                  <div>
                    <strong className="text-gray-800">Build Quality:</strong>{" "}
                    {renderStars(review.ratings.buildQuality)}
                  </div>
                  <div>
                    <strong className="text-gray-800">Value for Money:</strong>{" "}
                    {renderStars(review.ratings.valueForMoney)}
                  </div>
                  <div>
                    <strong className="text-gray-800">Bass Quality:</strong>{" "}
                    {renderStars(review.ratings.bassQuality)}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-base italic border-t pt-4">
                  "{review.review}"
                </p>

                {/* Delete Button */}
                <div className="mt-4 text-right">
                  <button
                    onClick={() => handleDelete(review.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i}>
        <svg
          className={`w-5 h-5 inline ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.571 8.332 1.151-6.065 5.857 1.432 8.234-7.367-3.868-7.367 3.868 1.432-8.234-6.065-5.857 8.332-1.151z" />
        </svg>
      </span>
    );
  }
  return stars;
};

export default ReviewsManage;
