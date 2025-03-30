import { Link } from "react-router-dom";

function Rooms() {
  const rooms = [
    { id: 1, image: "/room1.webp", title: "Deluxe Room", price: 120 },
    { id: 2, image: "/room2.webp", title: "Suite Room", price: 200 },
    { id: 3, image: "/Classic Twin Room.avif", title: "Classic Twin Room", price: 300 },
    { id: 4, image: "/Executive Room.avif", title: "Executive Room", price: 500 },
    { id: 5, image: "/Family Suite.webp", title: "Family Suite", price: 900 },
    { id: 6, image: "/Honeymoon Suite.webp", title: "Honeymoon Suite", price: 2000 },
    { id: 7, image: "/Luxury King Room.avif", title: "Luxury King Room", price: 5000 },
    { id: 8, image: "/Ocean View Room.webp", title: "Ocean View Room", price: 800 },
    { id: 9, image: "/Penthouse Suite.webp", title: "Penthouse Suite", price: 700 },
    { id: 10, image: "/Presidential Suite.avif", title: "Presidential Suite", price: 1000 }
  ];


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Explore Our Luxurious Rooms</h2>
      <p className="text-center text-muted">Find the perfect stay with world-class amenities and comfort.</p>

      <div className="row">
        {rooms.map(({ id, image, title, price }) => (
          <div key={id} className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <img
                src={image}
                alt={title}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out"
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><strong>${price}</strong> per night</p>
                
                <div className="d-flex justify-content-center gap-2">
                  <Link to={`/Booking`} className="btn btn-success">Book Now</Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
