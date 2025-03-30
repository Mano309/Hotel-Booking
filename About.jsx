import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">About Us</h2>
      <p className="text-center text-muted">Discover the elegance and comfort of our luxury hotel.</p>

      <div className="row mt-4">
        {/* Hotel Introduction */}
        <div className="col-md-6">
          <h4>Our Story</h4>
          <p>
            Established in 2005, our hotel has been a symbol of luxury and comfort. 
            Nestled in the heart of the city, we provide a perfect blend of modern 
            amenities and timeless elegance.
          </p>

          <h4>Our Mission</h4>
          <p>
            We aim to deliver world-class hospitality, ensuring that every guest enjoys 
            a memorable and comfortable stay.
          </p>
        </div>

        {/* Hotel Services & Amenities */}
        <div className="col-md-6">
          <h4>Our Services</h4>
          <ul>
            <li>Luxury Suites & Rooms</li>
            <li>24/7 Room Service</li>
            <li>Fine Dining & International Cuisine</li>
            <li>Spa & Wellness Center</li>
            <li>Business Conference Rooms</li>
            <li>Free Wi-Fi & High-Speed Internet</li>
            <li>Airport Pickup & Drop Services</li>
          </ul>

          <h4>Amenities</h4>
          <ul>
            <li>Swimming Pool & Gym</li>
            <li>Private Beach Access</li>
            <li>Concierge Service</li>
            <li>Pet-Friendly Accommodations</li>
          </ul>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-5">
        <h4 className="text-center">What Our Guests Say</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="p-3 border rounded shadow-sm">
              <p>"An unforgettable experience! The service was exceptional, and the view was breathtaking!"</p>
              <p className="text-muted">- Sarah L.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded shadow-sm">
              <p>"Perfect for business trips and family vacations. The food was amazing!"</p>
              <p className="text-muted">- Mark R.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded shadow-sm">
              <p>"Luxury at its finest! Highly recommend this hotel for a relaxing stay."</p>
              <p className="text-muted">- Emma J.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-4">
        <h4>Experience the Best in Hospitality</h4>
        <p>Book your stay with us today and enjoy an extraordinary experience!</p>
        <a href="/booking" className="btn btn-primary">Book Now</a>
      </div>
    </div>
  );
}

export default About;
