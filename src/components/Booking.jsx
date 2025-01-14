/* 
BEST ONE
import React, { useState, useEffect } from 'react';
import './Booking.css';  // Import external CSS for styling

const Booking = () => {
  const [adultQty, setAdultQty] = useState(() => Number(localStorage.getItem('adultQty')) || 0);
  const [childQty, setChildQty] = useState(() => Number(localStorage.getItem('childQty')) || 0);
  const [guideQty, setGuideQty] = useState(() => Number(localStorage.getItem('guideQty')) || 0);
  const [total, setTotal] = useState(0);
  const [firstName, setFirstName] = useState(() => localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = useState(() => localStorage.getItem('lastName') || '');
  const [email, setEmail] = useState(() => localStorage.getItem('email') || '');
  const [phone, setPhone] = useState(() => localStorage.getItem('phone') || '');
  const [date, setDate] = useState(() => localStorage.getItem('date') || '');
  const [time, setTime] = useState(() => localStorage.getItem('time') || '');
  const [paymentMethod, setPaymentMethod] = useState(() => localStorage.getItem('paymentMethod') || '');

  const calculateTotal = () => {
    const adultCost = 25 * adultQty;
    const childCost = 5 * childQty;
    const guideCost = 5 * guideQty;
    const totalCost = adultCost + childCost + guideCost;
    setTotal(totalCost);
    localStorage.setItem('adultQty', adultQty);
    localStorage.setItem('childQty', childQty);
    localStorage.setItem('guideQty', guideQty);
  };

  useEffect(() => {
    calculateTotal();
  }, [adultQty, childQty, guideQty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted!\nTotal: $${total.toFixed(2)}\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nPayment Method: ${paymentMethod}`);
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

  return (
    <div className="booking-container">
      <h1>Museum Ticket Form</h1>
      <form onSubmit={handleSubmit}>
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
              value={guideQty}
              onChange={(e) => setGuideQty(Number(e.target.value))}
            />
            <span>Free</span>
          </label><hr />
        </div>

        <div className="total-display">
          <p>Total: ${total.toFixed(2)}</p>
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
            placeholder="Phone Number"
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

        <div className="form-section">
          <label>
            <input type="checkbox" required />
            I agree to  <a href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/" target="_blank" rel="noopener noreferrer">Terms & Conditions and measure for safe visit.</a>
          </label>
        </div>

        <div className="form-section-two">
          <p>Payment Methods:</p>
          <label>
            <input
              type="radio"
              name="payment"
              value="credit"
              checked={paymentMethod === 'credit'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            /> Debit or Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />

            PayPal
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Booking;


 */



/* 
SECOND ONE


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    adultQty: Number(localStorage.getItem('adultQty')) || 0,
    childQty: Number(localStorage.getItem('childQty')) || 0,
    guideQty: Number(localStorage.getItem('guideQty')) || 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    paymentMethod: '',
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const { adultQty, childQty, guideQty } = formData;
    const totalCost = (25 * adultQty) + (5 * childQty) + (5 * guideQty);
    setTotal(totalCost);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('ticketDetails', JSON.stringify({ ...formData, total }));
    navigate('/confirmation');  // Navigate to the confirmation page
  };

  return (
    <div className="booking-container">
      <h1>Museum Ticket Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Adult - $25.00
          <input
            type="number"
            name="adultQty"
            min="0"
            value={formData.adultQty}
            onChange={handleChange}
          />
        </label>
        <label>Child (12 and under) - $5.00
          <input
            type="number"
            name="childQty"
            min="0"
            value={formData.childQty}
            onChange={handleChange}
          />
        </label>
        <label>Tour Guide - $5.00
          <input
            type="number"
            name="guideQty"
            min="0"
            value={formData.guideQty}
            onChange={handleChange}
          />
        </label>
        <div>Total: ${total.toFixed(2)}</div>
        <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />
        <label><input type="radio" name="time" value="9:00 AM" onChange={handleChange} /> 9:00 AM</label>
        <label><input type="radio" name="time" value="2:00 PM" onChange={handleChange} /> 2:00 PM</label>
        <label><input type="radio" name="time" value="5:00 PM" onChange={handleChange} /> 5:00 PM</label>
        <label><input type="radio" name="paymentMethod" value="credit" onChange={handleChange} required /> Debit or Credit Card</label>
        <label><input type="radio" name="paymentMethod" value="paypal" onChange={handleChange} /> PayPal</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
 */



//LAST ONE 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Booking.css';  // Import external CSS for styling

const Booking = () => {
  const [adultQty, setAdultQty] = useState(() => Number(localStorage.getItem('adultQty')) || 0);
  const [childQty, setChildQty] = useState(() => Number(localStorage.getItem('childQty')) || 0);
  const [guideQty, setGuideQty] = useState(() => Number(localStorage.getItem('guideQty')) || 0);
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
    const totalCost = adultCost + childCost + guideCost;
    setTotal(totalCost);
    localStorage.setItem('adultQty', adultQty);
    localStorage.setItem('childQty', childQty);
    localStorage.setItem('guideQty', guideQty);
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
              value={guideQty}
              onChange={(e) => setGuideQty(Number(e.target.value))}
            />
            <span>Free</span>
          </label><hr />
        </div>

        <div className="total-display">
          <p>Total: ${total.toFixed(2)}</p>
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
            placeholder="Phone Number"
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

        <div className="form-section">
          <label>
            <input type="checkbox" required />
            I agree to  <a href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/" target="_blank" rel="noopener noreferrer">Terms & Conditions and measure for safe visit.</a>
          </label>
        </div>

        <div className="form-section-two">
          <p>Payment Methods:</p>
          <label>
            <input
              type="radio"
              name="payment"
              value="credit"
              checked={paymentMethod === 'credit'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            /> Debit or Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            PayPal
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
