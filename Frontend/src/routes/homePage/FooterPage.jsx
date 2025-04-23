import { useContext } from "react";
import "./footerPage.scss";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterPage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerSection">
          <h3>About Us</h3>
          <p>
            We are committed to helping you find your perfect property with
            trust, transparency, and technology. With over 16 years of
            experience, our platform connects you to thousands of real estate
            opportunities.
          </p>
        </div>
        <div className="footerSection">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Agents</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Contact Us</h3>
          <p>Email: support@realestate.com</p>
          <p>Phone: +358 123 456 789</p>
          <p>Address: Seinajoki, Finland</p>
        </div>
        <div className="footerSection">
          <h3>Follow Us</h3>
          <div className="socialIcons">
            <a href="#">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; 2025 TimaEstate. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterPage;
