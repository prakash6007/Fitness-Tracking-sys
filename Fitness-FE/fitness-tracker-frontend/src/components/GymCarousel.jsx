import Carousel from "react-bootstrap/Carousel";

function GymCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
          alt="Gym"
        />
        <Carousel.Caption>
          <h2>Transform Your Body</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
          alt="Workout"
        />
        <Carousel.Caption>
          <h2>Track Your Fitness</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="Fitness"
        />
        <Carousel.Caption>
          <h2>Stay Healthy</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GymCarousel;