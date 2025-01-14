import "./BookingConfirmation.css"
const BookingConfirmation = () => {
    const ticketDetails = JSON.parse(localStorage.getItem('ticketDetails'));

    if (!ticketDetails) {
        return <p>No booking details found.</p>;
    }

    return (
        <div className="confirmation-container">
            <h1>Booking Confirmation</h1>
            <p><strong>Name:</strong> {ticketDetails.firstName} {ticketDetails.lastName}</p>
            <p><strong>Email:</strong> {ticketDetails.email}</p>
            <p><strong>Phone:</strong> {ticketDetails.phone}</p>
            <p><strong>Date:</strong> {ticketDetails.date}</p>
            <p><strong>Time:</strong> {ticketDetails.time}</p>
            <p><strong>Payment Method:</strong> {ticketDetails.paymentMethod}</p>
            <p><strong>Adults:</strong> {ticketDetails.adultQty}</p>
            <p><strong>Children:</strong> {ticketDetails.childQty}</p>
            <p><strong>Tour Guides:</strong> {ticketDetails.guideQty}</p>
            <p><strong>Total:</strong> ${ticketDetails.total.toFixed(2)}</p>
            <button>Print</button>
        </div>
    );
};

export default BookingConfirmation;


