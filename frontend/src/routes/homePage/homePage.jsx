import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Discover Your Perfect Home with Ease</h1>
          <p>
            Explore a wide range of properties tailored to your lifestyle and
            budget. Whether you're buying, renting, or investing, we help you
            find a place you’ll love to call home.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Industry Expertise</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Recognitions & Awards</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Listed Properties Available</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bgg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
