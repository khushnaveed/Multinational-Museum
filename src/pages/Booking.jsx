import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaPaypal } from "react-icons/fa";

const Booking = () => {
  const [adultQty, setAdultQty] = useState(
    () => Number(localStorage.getItem("adultQty")) || 0
  );
  const [childQty, setChildQty] = useState(
    () => Number(localStorage.getItem("childQty")) || 0
  );
  const [guideQty, setGuideQty] = useState(
    () => Number(localStorage.getItem("guideQty")) || 0
  );
  const [museumPassQty, setMuseumPassQty] = useState(
    () => Number(localStorage.getItem("museumPassQty")) || 0
  );
  const [total, setTotal] = useState(0);
  const [firstName, setFirstName] = useState(
    () => localStorage.getItem("firstName") || ""
  );
  const [lastName, setLastName] = useState(
    () => localStorage.getItem("lastName") || ""
  );
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [phone, setPhone] = useState(() => localStorage.getItem("phone") || "");
  const [date, setDate] = useState(() => localStorage.getItem("date") || "");
  const [time, setTime] = useState(() => localStorage.getItem("time") || "");
  const [paymentMethod, setPaymentMethod] = useState(
    () => localStorage.getItem("paymentMethod") || ""
  );
  const navigate = useNavigate();

  const calculateTotal = () => {
    const adultCost = 25 * adultQty;
    const childCost = 5 * childQty;
    const guideCost = 5 * guideQty;
    const totalCost = adultCost + childCost + guideCost;
    setTotal(totalCost);
    localStorage.setItem("adultQty", adultQty.toString());
    localStorage.setItem("childQty", childQty.toString());
    localStorage.setItem("guideQty", guideQty.toString());
    localStorage.setItem("museumPassQty", museumPassQty.toString());
  };

  useEffect(() => {
    calculateTotal();
  }, [adultQty, childQty, guideQty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
      paymentMethod,
      adultQty,
      childQty,
      guideQty,
      total,
    };
    localStorage.setItem("ticketDetails", JSON.stringify(bookingDetails));
    navigate("/booking-confirmation");
  };

  useEffect(() => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    localStorage.setItem("paymentMethod", paymentMethod);
  }, [firstName, lastName, email, phone, date, time, paymentMethod]);

  const resetForm = () => {
    setAdultQty(0);
    setChildQty(0);
    setGuideQty(0);
    setMuseumPassQty(0);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setPaymentMethod("");

    [
      "adultQty",
      "childQty",
      "guideQty",
      "museumPassQty",
      "firstName",
      "lastName",
      "email",
      "phone",
      "date",
      "time",
      "paymentMethod",
      "ticketDetails",
    ].forEach((key) => localStorage.removeItem(key));
  };

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-60"
      >
        <source
          src="https://cdn.pixabay.com/video/2017/01/12/7260-199191197_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="w-[90%] max-w-3xl mx-auto my-5 p-5 rounded-2xl text-gray-200">
        <h1 className="text-3xl font-bold text-center p-5 text-shadow">
          Museum Ticket Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-800 p-7 rounded-2xl"
        >
          <div className="flex flex-col gap-6">
            {/* Adult Section */}
            <div className="border-b border-gray-600 pb-4">
              <h4 className="font-bold text-lg">Adult</h4>
              <p className="text-gray-400">Quantity</p>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  //test
                  inputMode="numeric"


                  min="0"
                  value={adultQty}
                  onChange={(e) => setAdultQty(Number(e.target.value))}
                  className="mt-2 p-2 rounded-md w-32 text-black bg-gray-200"
                />
                <span className="font-bold">$25.00</span>
              </div>
            </div>

            {/* Child Section */}
            <div className="border-b border-gray-600 pb-4">
              <h4 className="font-bold text-lg">Child</h4>
              <p className="text-gray-400">Ages 18 and under</p>
              <p className="text-gray-400">Quantity</p>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  //test
                  inputMode="numeric"
                  min="0"
                  value={childQty}
                  onChange={(e) => setChildQty(Number(e.target.value))}
                  className="mt-2 p-2 rounded-md w-32 text-black bg-gray-200"
                />
                <span className="font-bold">$5.00</span>
              </div>
            </div>

            {/* Guide Section */}
            <div className="border-b border-gray-600 pb-4">
              <h4 className="font-bold text-lg">Tour Guide</h4>
              <p className="text-gray-400">Quantity</p>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  //test
                  inputMode="numeric"
                  min="0"
                  value={guideQty}
                  onChange={(e) => setGuideQty(Number(e.target.value))}
                  className="mt-2 p-2 rounded-md w-32 text-black bg-gray-200"
                />
                <span className="font-bold">$5.00</span>
              </div>
            </div>

            {/* Museum Pass Section */}
            <div className="border-b border-gray-600 pb-4">
              <h4 className="font-bold text-lg">Museum Pass</h4>
              <p className="text-gray-400">Ages 18 and under</p>
              <p className="text-gray-400">Quantity</p>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  //test
                  inputMode="numeric"
                  min="0"
                  value={museumPassQty}
                  onChange={(e) => setMuseumPassQty(Number(e.target.value))}
                  className="mt-2 p-2 rounded-md w-32 text-black bg-gray-200"
                />
                <span className="font-bold">Free</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="p-2 rounded-md w-full text-black bg-gray-200"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="p-2 rounded-md w-full text-black bg-gray-200"
            />
            <input
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded-md w-full text-black bg-gray-200"
            />
            <input
              type="tel"
              placeholder="+00-0000 0000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 rounded-md w-full text-black bg-gray-200"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="block">
              <span className="text-white">Choose your start time:</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-2 p-2 rounded-md w-full text-black bg-gray-200"
              />
            </label>

            <div className="flex gap-6">
              {["9:00 AM", "2:00 PM", "5:00 PM"].map((timeOption) => (
                <label key={timeOption} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="time"
                    value={timeOption}
                    checked={time === timeOption}
                    onChange={(e) => setTime(e.target.value)}
                    className="text-blue-600"
                  />
                  {timeOption}
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" required className="text-blue-600" />
            <span>
              I agree to{" "}
              <a
                href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                Terms & Conditions and measure for safe visit.
              </a>
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium">Payment Methods:</p>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="credit"
                checked={paymentMethod === "credit"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
                className="text-blue-600"
              />
              <FaCreditCard className="text-[#0070ba]" />
              <span>Debit or Credit Card</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-blue-600"
              />
              <FaPaypal className="text-[#0070ba]" />
              <span>PayPal</span>
            </label>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className=" text-gray-200 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={resetForm}
              className=" text-gray-200 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Reset All
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
