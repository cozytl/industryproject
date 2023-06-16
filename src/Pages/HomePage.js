import "../Pages/HomePage.scss";
import Category from "../components/Category/Category";

function HomePage() {
  return (
    <>
      <div className="home-page">
        <h1 className="home-page__title">
          Vorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <form className="home-page__search-form">
          <input
            className="home-page__search-input"
            type="search"
            name="search"
            placeholder="Search..."
          ></input>
        </form>
        <h2 className="home-page__subheader">
          Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </h2>
      </div>
      <Category />
    </>
  );
}

export default HomePage;
