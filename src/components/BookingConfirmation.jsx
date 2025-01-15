import "./BookingConfirmation.css"
const BookingConfirmation = () => {
    const ticketDetails = JSON.parse(localStorage.getItem('ticketDetails'));

    if (!ticketDetails) {
        return <p>No booking details found.</p>;
    }

    const handlePrint = () => {
        window.print(); // Initiates print dialog
        alert('The booking confirmation has been sent to the printer.');
    };

    return (
        <div className="confirmation-container">
            <div className="confirm">
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

                <button onClick={handlePrint} >Print</button>
            </div>
        </div>
    );
};

export default BookingConfirmation;


