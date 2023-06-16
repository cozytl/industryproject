import "../Pages/HomePage.scss";
import Search from "../components/Search/Search";

function HomePage() {
  return (
    <>
      <div className="home-page">
        <h1 className="home-page__title">
          Your Destination for all things Environmentally Friendly.
        </h1>
        <Search />
        <h2 className="home-page__subheader">
          Discover the environmental impact of the products you're interested
          in, and we’ll help you find greener alternatives!
        </h2>
      </div>

      <div className="home-page__category">
        <div className="home-page__category-container"></div>
        <h2 className="home-page__category-title">Title</h2>
      </div>
    </>
  );
}

export default HomePage;
