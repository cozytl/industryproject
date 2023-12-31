import "./HomePage.scss";
import Search from "../../components/Search/Search";
import Image1 from "../../assets/images/Rectangle44.png";
import Image2 from "../../assets/images/Rectangle45.png";
import Image3 from "../../assets/images/Rectangle47.png";
import Image4 from "../../assets/images/Rectangle46.png";
import Image5 from "../../assets/images/Rectangle48.png";
import Image6 from "../../assets/images/Rectangle43.png";

function HomePage() {
  return (
    <>
      <section className="home-page">
        <div className="home-page__overlay"></div>
        <div className="home-page__hero-container">
          <h1 className="home-page__title">
            Your Destination for all things Environmentally Friendly.
          </h1>
          <Search />

          <h2 className="home-page__subheader">
            Discover the environmental impact of the products you're interested
            in, and we’ll help you find greener alternatives!
          </h2>
        </div>
      </section>

      <section className="home-page__category-section">
        <div className="home-page__container">
          <div className="home-page__category">
            <img
              src={Image1}
              alt="Apparel Image"
              className="home-page__category-container"
            />
          </div>
          <h2 className="home-page__category-title">Apparel</h2>
        </div>

        <div className="home-page__container">
          <div className="home-page__category">
            <img
              src={Image2}
              alt="Technology Image"
              className="home-page__category-container"
            />
          </div>
          <h2 className="home-page__category-title">Technology</h2>
        </div>

        <div className="home-page__container">
          <div className="home-page__category">
            <img
              src={Image3}
              alt="Indoor Image"
              className="home-page__category-container"
            />
          </div>
          <h2 className="home-page__category-title">Indoor</h2>
        </div>

        <div className="home-page__container">
          <div className="home-page__category">
            <img
              src={Image4}
              alt="Outdoor Image"
              className="home-page__category-container"
            />
          </div>
          <h2 className="home-page__category-title">Outdoor</h2>
        </div>

        <div className="home-page__container">
          <div className="home-page__category">
            <img
              src={Image5}
              alt="Pet Supplies Image"
              className="home-page__category-container"
            />
          </div>
          <h2 className="home-page__category-title">Pet Supplies</h2>
        </div>

        <div className="home-page__container">
          <div className="home-page__category">
            <img
              src={Image6}
              alt="FitnessImage"
              className="home-page__category-container"
            />
          </div>
          <h2 className="home-page__category-title">Fitness</h2>
        </div>
      </section>
    </>
  );
}

export default HomePage;
