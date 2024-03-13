import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import dimg1 from "../assets/images/destination1.jpeg";
import dimg2 from "../assets/images/destination2.jpeg";
import dimg3 from "../assets/images/destination3.png";

const Landing = () => {
  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <Link className="navbar-brand" to="/">
            OdysseyGuide
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="nav-link"
                >
                  Home
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="featured"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="nav-link"
                >
                  Featured Destinations
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="nav-link"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* Jumbotron */}
        <div id="home" className="jumbotron">
          <h1 className="display-4">Explore Your Destination</h1>
          <p className="lead">
            Discover amazing travel guides and articles written by fellow
            explorers.
          </p>
          <div className="input-group search-bar">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a destination..."
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
        {/* Featured Destinations */}
        <div id="featured" className="container featured-destinations">
          <h2 className="text-center mb-4">Featured Destinations</h2>
          <div className="row">
            {/* Example Destination Card 1 */}
            <div className="col-md-4 destination-card">
              <div className="card">
                <img src={dimg1} className="card-img-top" alt="Destination 1" />
                <div className="card-body">
                  <h5 className="card-title">Destination 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus nec metus sed est fermentum malesuada.
                  </p>
                  <Link to="/destination" className="btn btn-primary">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            {/* Example Destination Card 2 */}
            <div className="col-md-4 destination-card">
              <div className="card">
                <img src={dimg2} className="card-img-top" alt="Destination 2" />
                <div className="card-body">
                  <h5 className="card-title">Destination 2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus nec metus sed est fermentum malesuada.
                  </p>
                  <Link to="/destination" className="btn btn-primary">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            {/* Example Destination Card 3 */}
            <div className="col-md-4 destination-card">
              <div className="card">
                <img src={dimg3} className="card-img-top" alt="Destination 3" />
                <div className="card-body">
                  <h5 className="card-title">Destination 3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus nec metus sed est fermentum malesuada.
                  </p>
                  <Link to="/destination" className="btn btn-primary">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div id="contact" className="container p-5">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p>Have questions or suggestions? Reach out to us!</p>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows={4}
                placeholder="Your Message"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        {/* Footer */}
        <div className="footer">
          <p>© 2024 OdysseyGuide by Fahim Hasan Himel. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Landing;
