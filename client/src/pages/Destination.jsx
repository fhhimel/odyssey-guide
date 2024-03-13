import React from "react";
import { Link } from "react-router-dom";

import uimg from "../assets/images/user_avatar.png";

const Destination = () => {
  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              {/* <li class="nav-item active">
      <a class="nav-link" href="#"
        >Home <span class="sr-only">(current)</span></a
      >
    </li> */}
            </ul>
          </div>
        </nav>
        {/* Destination Header */}
        <div className="destination-header">
          <h1 className="display-4">Beautiful Destination</h1>
        </div>
        {/* Destination Info */}
        <div className="container destination-info">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2 className="text-center mb-4">About the Place</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nec metus sed est fermentum malesuada. Nullam vel risus vel nisi
                tempus vestibulum at in erat.
              </p>
              <p>
                <strong>Location:</strong> City
              </p>
              <p>
                <strong>Climate:</strong> Tropical
              </p>
            </div>
          </div>
        </div>
        {/* Destination Articles */}
        <div id="articles" className="container destination-articles p-5">
          <h2 className="text-center mb-4">Explore Articles</h2>
          <div className="row">
            {/* Example Article Card 1 */}
            <div className="col-md-6">
              <div className="article-card">
                <div className="article-body">
                  <h5 className="card-title">Article Title 1</h5>
                  <p className="card-text">
                    Short description of the article. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                  <div className="article-author">
                    <img src={uimg} className="author-image" alt="Author 1" />
                    <div className="author-info">
                      <p>John Doe</p>
                      <small>Travel Enthusiast</small>
                    </div>
                  </div>
                  <div className="likes-comments">
                    <i className="far fa-thumbs-up like-icon" />
                    <p>50</p>
                    <i className="far fa-comment comment-icon" />
                    <p>10</p>
                  </div>
                  <Link to="/article" className="btn btn-primary mt-3">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Example Article Card 2 */}
            <div className="col-md-6">
              <div className="article-card">
                <div className="article-body">
                  <h5 className="card-title">Article Title 2</h5>
                  <p className="card-text">
                    Short description of the article. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                  <div className="article-author">
                    <img src={uimg} className="author-image" alt="Author 2" />
                    <div className="author-info">
                      <p>Jane Smith</p>
                      <small>Adventure Seeker</small>
                    </div>
                  </div>
                  <div className="likes-comments">
                    <i className="far fa-thumbs-up like-icon" />
                    <p>35</p>
                    <i className="far fa-comment comment-icon" />
                    <p>5</p>
                  </div>
                  <Link to="/article" className="btn btn-primary mt-3">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="footer">
          <p>© 2024 OdysseyGuide by Fahim Hasan Himel. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Destination;
