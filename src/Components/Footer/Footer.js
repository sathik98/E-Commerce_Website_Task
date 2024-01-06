import React from "react";
import "../../stylesheets/Footer.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div class="footer">
        <div class="content">
          <div class="services">
            <h4>ABOUT</h4>
            <p>
              <a href="#">Contact Us</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">Flipkart Stories</a>
            </p>
            <p>
              <a href="#">Flipkart Wholesale</a>
            </p>
          </div>
          <div class="social-media">
            <h4>HELP</h4>
            <p>
              <a href="#">
                <i class="fab fa-linkedin"></i> Payment
              </a>
            </p>
            <p>
              <a href="#">
                {" "}
                <i class="fab fa-twitter"></i> Shipping
              </a>
            </p>
            <p>
              <a href="#">
                {" "}
                <i class="fab fa-github"></i> Cancellation & Returns
              </a>
            </p>
            <p>
              <a href="#">
                {" "}
                <i class="fab fa-codepen"></i> FAQ
              </a>
            </p>
            <p>
              <a href="#">
                {" "}
                <i class="fab fa-instagram"></i> Report Infringement
              </a>
            </p>
          </div>
          <div class="links">
            <h4>Consumer Policy</h4>
            <p>
              <a href="#">Terms of Use</a>
            </p>
            <p>
              <a href="#">Security</a>
            </p>
            <p>
              <a href="#">Privacy</a>
            </p>
            <p>
              <a href="#">EPR Compliance</a>
            </p>
          </div>
          <div class="details">
            <h4 class="address">Office Address</h4>
            <p>
            Flipkart Internet Private Limited, <br />
            Outer Ring Road, Devarabeesanahalli Village,  <br />
            Bengaluru, 560103, <br />
            Karnataka, India.
            </p>
            <h4 class="mobile">Mobile</h4>
            <p>
              <a href="#">+9112233445</a>
            </p>
            <h4 class="mail">Email</h4>
            <p>
              <a href="#">abcdef@gmail.com</a>
            </p>
          </div>
        </div>
        <footer>
          <hr />
          <div className="footer-text">
          &copy; 2007 - 2024 Flipkart.com
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
