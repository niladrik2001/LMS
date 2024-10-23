import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main2 from "../assets/images/main2.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Library <span>Management </span>
            System
          </h1>
          <p>
            Empowering knowledge through seamless library management. Organize,
            access, and discover a world of books with just one click.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo
          </Link>
        </div>
        <img src={main2} alt="Book find" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};
export default Landing;
