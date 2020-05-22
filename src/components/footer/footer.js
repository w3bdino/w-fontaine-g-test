
import React from "react";
import { Container } from "reactstrap";
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright">
          © {new Date().getFullYear()} Front End Developer Test {" "}
            <i className="tim-icons icon-heart-2" /> by{" "}
            Dino Robles{" "}|{" "}webdino.r@gmail.com
            {" "}|{" "}
          Front End Developer.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
