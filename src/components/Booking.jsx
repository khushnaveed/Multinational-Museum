
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaCreditCard, FaPaypal } from 'react-icons/fa'; // Import specific icons
import './Booking.css';  // Import external CSS for styling

const Booking = () => {
  const [adultQty, setAdultQty] = useState(() => Number(localStorage.getItem('adultQty')) || 0);
  const [childQty, setChildQty] = useState(() => Number(localStorage.getItem('childQty')) || 0);
  const [guideQty, setGuideQty] = useState(() => Number(localStorage.getItem('guideQty')) || 0);
  const [museumPassQty, setMuseumPassQty] = useState(() => Number(localStorage.getItem('museumPassQty')) || 0);
  const [total, setTotal] = useState(0);
  const [firstName, setFirstName] = useState(() => localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = useState(() => localStorage.getItem('lastName') || '');
  const [email, setEmail] = useState(() => localStorage.getItem('email') || '');
  const [phone, setPhone] = useState(() => localStorage.getItem('phone') || '');
  const [date, setDate] = useState(() => localStorage.getItem('date') || '');
  const [time, setTime] = useState(() => localStorage.getItem('time') || '');
  const [paymentMethod, setPaymentMethod] = useState(() => localStorage.getItem('paymentMethod') || '');
  const navigate = useNavigate();  // Initialize useNavigate

  const calculateTotal = () => {
    const adultCost = 25 * adultQty;
    const childCost = 5 * childQty;
    const guideCost = 5 * guideQty;
    const museumPassCost = 0 * museumPassQty;
    const totalCost = adultCost + childCost + guideCost;
    setTotal(totalCost);
    localStorage.setItem('adultQty', adultQty);
    localStorage.setItem('childQty', childQty);
    localStorage.setItem('guideQty', guideQty);
    localStorage.setItem('museumPassQty', museumPassQty);


  };

  useEffect(() => {
    calculateTotal();
  }, [adultQty, childQty, guideQty]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store all booking details in localStorage as an object
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
      total
    };
    localStorage.setItem('ticketDetails', JSON.stringify(bookingDetails));

    // Redirect to BookingConfirmation
    navigate('/booking-confirmation');
  };

  useEffect(() => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);
    localStorage.setItem('paymentMethod', paymentMethod);
  }, [firstName, lastName, email, phone, date, time, paymentMethod]);




  const resetForm = () => {
    setAdultQty(0);
    setChildQty(0);
    setGuideQty(0);
    setMuseumPassQty(0);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setPaymentMethod('');

    // Clear related localStorage keys
    localStorage.removeItem('adultQty');
    localStorage.removeItem('childQty');
    localStorage.removeItem('guideQty');
    localStorage.removeItem('museumPassQty');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    localStorage.removeItem('date');
    localStorage.removeItem('time');
    localStorage.removeItem('paymentMethod');
    localStorage.removeItem('ticketDetails');
  };


  return (
    <div className="booking-container">
      <h1>Museum Ticket Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Booking form fields */}
        <div className="form-section">
          <label>
            <h4>Adult</h4>
            <p>Quantity</p>
            <input
              type="number"
              min="0"
              value={adultQty}
              onChange={(e) => setAdultQty(Number(e.target.value))}
            />
            <span>$25.00</span>
          </label><hr />
          <label>
            <h4>Child </h4>
            <p>Ages 18 and under</p>
            <p>Quantity</p>
            <input
              type="number"
              min="0"
              value={childQty}
              onChange={(e) => setChildQty(Number(e.target.value))}
            />
            <span>$5.00</span>
          </label><hr />
          <label>
            <h4>Tour Guide </h4>
            <p>Quantity</p>
            <input
              type="number"
              min="0"
              value={guideQty}
              onChange={(e) => setGuideQty(Number(e.target.value))}
            />
            <span>$5.00</span>
          </label><hr />
          <label>
            <h4>Museum Pass </h4>
            <p>Ages 18 and under</p>
            <p>Quantity</p>
            <input
              type="number"
              min="0"
              value={museumPassQty}
              onChange={(e) => setMuseumPassQty(Number(e.target.value))}
            />
            <span>Free</span>
          </label><hr />
        </div>

        <div className="total-display">
          <p className='total'>Total: ${total.toFixed(2)}</p>
        </div>

        <div className="form-section">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="+00-0000 0000 0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label htmlFor="date">Choose your start time:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div>
            <div className='radio'>
              <label>

                <input
                  type="radio"
                  name="time"
                  value="9:00 AM"
                  checked={time === '9:00 AM'}
                  onChange={(e) => setTime(e.target.value)}
                /> 9:00 AM
              </label>
              <label>
                <input
                  type="radio"
                  name="time"
                  value="2:00 PM"
                  checked={time === '2:00 PM'}
                  onChange={(e) => setTime(e.target.value)}
                /> 2:00 PM
              </label>
              <label>
                <input
                  type="radio"
                  name="time"
                  value="5:00 PM"
                  checked={time === '5:00 PM'}
                  onChange={(e) => setTime(e.target.value)}
                /> 5:00 PM
              </label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <label>
            <input type="checkbox" required />
            I agree to  <a href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/" target="_blank" rel="noopener noreferrer">Terms & Conditions and measure for safe visit.</a>
          </label>
        </div>

        <div className="form-section-two">
          <p>Payment Methods:</p>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              name="payment"
              value="credit"
              checked={paymentMethod === 'credit'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            /> <FaCreditCard style={{ marginLeft: '8px', marginRight: '8px', color: "#0070ba" }} />Debit or Credit Card
          </label>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <FaPaypal style={{ marginLeft: '8px', marginRight: '8px', color: "#0070ba" }} />PayPal
          </label>
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>Reset All</button>
      </form>
    </div>
  );
};

export default Booking;

