import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="container text-center">
          <h1><b>Welcome to Our Luxury Hotel</b></h1>
          <p>Experience comfort, elegance, and world-class service.</p>
          <a href="/rooms" className="btn btn-primary">View Rooms</a>
        </div>
      </div>

      {/* About Section */}
      <div className="container mt-5">
        <h2 className="text-center">About Our Hotel</h2>
        <p className="text-center">
          Nestled in the heart of the city, our hotel offers a luxurious experience
          with modern amenities and top-notch hospitality. Whether you're traveling
          for business or leisure, we have the perfect room for you.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mt-5">
        <h2 className="text-center">Our Services</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <img src="/service4.jpeg" alt="Spa" className="service-img" />
            <h4>Spa & Wellness</h4>
            <p>Relax and rejuvenate at our full-service spa.</p>
          </div>
          <div className="col-md-4">
            <img src="/service5.avif" alt="Dining" className="service-img" />
            <h4>Fine Dining</h4>
            <p>Enjoy exquisite cuisine prepared by world-class chefs.</p>
          </div>
          <div className="col-md-4">
            <img src="/service6.avif" alt="Pool" className="service-img" />
            <h4>Swimming Pool</h4>
            <p>Dive into our luxurious infinity pool with a stunning view.</p>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="container mt-5">
        <h2 className="text-center">What Our Guests Say</h2>
        <div className="row">
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>"An absolutely wonderful experience! The service was impeccable."</p>
              <footer className="blockquote-footer">John Doe</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>"A beautiful and serene place to stay. Highly recommended!"</p>
              <footer className="blockquote-footer">Jane Smith</footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <a href="/booking" className="btn btn-success btn-lg">Book Now</a>
      </div>
    </div>
  );
}

export default Home;
