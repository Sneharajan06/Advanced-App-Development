import React, { useState } from "react";
import "./homepage.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar />
      <div className="menu-btn">
        <i className="fas fa-bars fa-2x" />
      </div>
      <div className="container">
        <nav className="main-nav">
          <ul className="main-menu"></ul>
          <ul className="right-menu">
            <li>
              <a href="#">
                <i className="fas fa-search" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-shopping-cart" />
              </a>
            </li>
          </ul>
        </nav>

        <header className="showcase">
          <h2>Special Collection!</h2>
          <p>Discover unique gifts for every occasion.</p>
          <a href="#" className="btn">
            Explore Now <i className="fas fa-chevron-right" />
          </a>
        </header>
        {/* Updated Home cards */}
        <section className="home-cards">
          <div>
            <Link to="/product">
              {" "}
              <img
                src="https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
            <h3>Handcrafted Jewelry</h3>
            <p>Elegant and artisanal pieces for your loved ones.</p>
            <a href="#">
              Shop Now <i className="fas fa-chevron-right" />
            </a>
          </div>
          <div>
            <Link to="/product">
              {" "}
              <img
                src="https://images.pexels.com/photos/9898288/pexels-photo-9898288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
            <h3>Watches</h3>
            <p>
              Discover our stunning collection of watches that blend style and
              functionality seamlessly
            </p>
            <a href="#">
              Shop Now <i className="fas fa-chevron-right" />
            </a>
          </div>
          <div>
            <Link to="/product">
              {" "}
              <img
                src="https://www.habereindia.com/cdn/shop/articles/Creative_Special_Gift_Basket_Ideas_For_Every_Occasion.png?v=1661227772"
                alt=""
              />
            </Link>
            <h3>Personalized Gifts</h3>
            <p>
              {" "}
              customized mugs, T-shirts, phone cases, photo frames, or engraved
              jewelry that feature names, initials, photos, or special messages.
            </p>
            <a href="#">
              Shop Now <i className="fas fa-chevron-right" />
            </a>
          </div>
          <div>
            <Link to="/product">
              {" "}
              <img
                src="https://images.pexels.com/photos/3259600/pexels-photo-3259600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
            <h3>Organic Skincare</h3>
            <p>Nourish their skin with natural and organic products.</p>
            <a href="#">
              Shop Now <i className="fas fa-chevron-right" />
            </a>
          </div>
        </section>

        
        <header className="showcase change">
          <h2>Special Collection!</h2>
          <p>Discover unique gifts for every occasion.</p>
          <a href="#" className="btn">
            Explore Now <i className="fas fa-chevron-right" />
          </a>
        </header>
        {/* Updated Home cards */}
        <section className="home-cards">
          <div>
            <Link to="/product">
              {" "}
              <img
                src="https://images.pexels.com/photos/12290109/pexels-photo-12290109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
            <h3>Handcrafted Jewelry</h3>
            <p>Elegant and artisanal pieces for your loved ones.</p>
            <a href="#">
              Shop Now <i className="fas fa-chevron-right" />
            </a>
          </div>
          <div>
            <Link to="/product">
              {" "}
              <img
                src="https://images.pexels.com/photos/1334600/pexels-photo-1334600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
            <h3>Watches</h3>
            <p>
              Discover our stunning collection of watches that blend style and
              functionality seamlessly
            </p>
            <a href="#">
              Shop Now <i className="fas fa-chevron-right" />
            </a>
          </div>
          <div>
            <Link to="/product">
              {" "}
              <img
                src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
            <h3>Personalized T-Shirt</h3>
            <p>
              {" "}
              customized mugs, T-shirts, phone cases, photo frames, or engraved
              jewelry that feature names, initials, photos, or special messages.
            </p>
            <a href="#">
              Shop Now <i className="fas fa-chevron-right" />
            </a>
          </div>
          <div>
            <Link to="/product">
              {" "}
              <img
                src="https://images.pexels.com/photos/6037891/pexels-photo-6037891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
            <h3>Organic whiteningCream</h3>
            <p>Nourish their skin with natural and organic cream.</p>
            <a href="#">
              Shop Now <i className="fas fa-chevron-right" />
            </a>
          </div>
        </section>

        

        <section className="follow">
          <a href="https://facebook.com">
            <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <img
              src="https://i.ibb.co/vJvbLwm/social-twitter.png"
              alt="Twitter"
            />
          </a>
          <a href="https://linkedin.com">
            <img
              src="https://i.ibb.co/b30HMhR/social-linkedin.png"
              alt="Linkedin"
            />
          </a>
        </section>
      </div>

      {/* Links Section */}
      <section className="links">
        <div className="links-inner">
          <ul>
            <li>
              <h3>Shop by Category</h3>
            </li>
            <li>
              <a href="#">Jewelry & Accessories</a>
            </li>
            <li>
              <a href="#">Home Decor</a>
            </li>
            <li>
              <a href="#">Beauty & Wellness</a>
            </li>
            <li>
              <a href="#">Gift Sets</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Gift Ideas</h3>
            </li>
            <li>
              <a href="#">Personalized Gifts</a>
            </li>
            <li>
              <a href="#">Unique Handmade Items</a>
            </li>
            <li>
              <a href="#">Gifts Under $50</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Seasonal Favorites</h3>
            </li>
            <li>
              <a href="#">Holiday Gifts</a>
            </li>
            <li>
              <a href="#">Summer Essentials</a>
            </li>
            <li>
              <a href="#">Winter Warmers</a>
            </li>
            <li>
              <a href="#">Spring Surprises</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <i className="fas fa-globe fa-2x" /> English (United States)
          </div>
          <ul>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy &amp; Cookies</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">© 2024 GiftShop Inc.</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
