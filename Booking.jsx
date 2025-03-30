import React, { useState } from "react";

function Booking() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const pricePerNight = 120; // Example price per night

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const nights = Math.max((endDate - startDate) / (1000 * 60 * 60 * 24), 0);

    return nights * pricePerNight;
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setError("");

    if (!checkIn || !checkOut) {
      setError("Please select both check-in and check-out dates.");
      return;
    }

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    if (startDate >= endDate) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    const totalAmount = calculateTotal();
    
    const bookingDetails = {
      checkIn,
      checkOut,
      totalAmount,
    };

    localStorage.setItem("booking", JSON.stringify(bookingDetails));
    setBookingConfirmed(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Book Your Stay</h2>
      <form className="mt-4" onSubmit={handleBooking}>
        <label>Check-In Date:</label>
        <input 
          type="date" 
          value={checkIn} 
          onChange={(e) => setCheckIn(e.target.value)} 
          className="form-control mb-2" 
        />

        <label>Check-Out Date:</label>
        <input 
          type="date" 
          value={checkOut} 
          onChange={(e) => setCheckOut(e.target.value)} 
          className="form-control mb-2" 
        />

        {error && <p className="text-danger">{error}</p>}

        <h4>Total Price: ${calculateTotal()}</h4>

        <button type="submit" className="btn btn-success mt-3">Confirm Booking</button>
      </form>

      {bookingConfirmed && (
        <div className="alert alert-success mt-3">
          Booking Confirmed! Check-In: {checkIn}, Check-Out: {checkOut}, Total: ${calculateTotal()}
        </div>
      )}
    </div>
  );
}

export default Booking;
