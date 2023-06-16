import "../Pages/HomePage.scss";
import Category from "../components/Category/Category";

function HomePage() {
  return (
    <>
      <div>
        <h1></h1>
        <form>
          <input type="search" name="search" placeholder="Search..."></input>
        </form>
        <h2></h2>
      </div>
      <Category />
    </>
  );
}

export default HomePage;
