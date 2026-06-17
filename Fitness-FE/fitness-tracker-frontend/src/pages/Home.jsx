import GymCarousel from "../components/GymCarousel";

function Home() {
  return (
    <div>

      <GymCarousel />

      <div className="container text-center mt-5">

        <h1 className="hero-title">
          AI Powered Fitness Tracker
        </h1>

        <p className="hero-text">
          Monitor workouts, calories, BMI and get
          fitness guidance from our AI chatbot.
        </p>

      </div>

    </div>
  );
}

export default Home;