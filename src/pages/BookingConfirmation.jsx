import React from "react";

const BookingConfirmation = () => {
  const ticketDetails = JSON.parse(
    localStorage.getItem("ticketDetails") || "{}"
  );

  if (!ticketDetails) {
    return (
      <p className="text-gray-600 text-center p-4">No booking details found.</p>
    );
  }

  const handlePrint = () => {
    window.print();
    alert("The booking confirmation has been sent to the printer.");
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
      >
        <source
          src="https://cdn.pixabay.com/video/2017/01/12/7260-199191197_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="bg-gray-800 text-gray-200 rounded-lg shadow-xl w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-200  mb-6 text-center">
          Booking Confirmation
        </h1>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-200 ">
              <span className="font-semibold">Name:</span>{" "}
              {ticketDetails.firstName} {ticketDetails.lastName}
            </p>
            <p className="text-gray-200 ">
              <span className="font-semibold">Email:</span>{" "}
              {ticketDetails.email}
            </p>
            <p className="text-gray-200 ">
              <span className="font-semibold">Phone:</span>{" "}
              {ticketDetails.phone}
            </p>
            <p className="text-gray-200">
              <span className="font-semibold">Date:</span> {ticketDetails.date}
            </p>
            <p className="text-gray-200">
              <span className="font-semibold">Time:</span> {ticketDetails.time}
            </p>
            <p className="text-gray-200">
              <span className="font-semibold">Payment Method:</span>{" "}
              {ticketDetails.paymentMethod}
            </p>
          </div>

          <div className="border-t border-gray-200 bg-gray-800 pt-4 mt-4">
            <h2 className="text-xl font-semibold text-gray-200 mb-3">
              Booking Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-200 ">
                <span className="font-semibold">Adults:</span>{" "}
                {ticketDetails.adultQty}
              </p>
              <p className="text-gray-200 ">
                <span className="font-semibold">Children:</span>{" "}
                {ticketDetails.childQty}
              </p>
              <p className="text-gray-200 ">
                <span className="font-semibold">Tour Guides:</span>{" "}
                {ticketDetails.guideQty}
              </p>
              <p className="text-gray-200 ">
                <span className="font-semibold">Total:</span> $
                {ticketDetails.total?.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handlePrint}
            className="text-gray-200 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md
                                 transition-colors duration-200 focus:outline-none focus:ring-2 
                                 focus:ring-offset-2 focus:ring-gray-900"
          >
            Print Confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
