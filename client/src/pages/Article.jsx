import React from "react";
import { Link } from "react-router-dom";
import aimg1 from "../assets/images/article_image1.jpg";
import aimg2 from "../assets/images/article_image2.jpg";
import aimg3 from "../assets/images/article_image3.jpg";
import uimg from "../assets/images/user_avatar.png";

const Article = () => {
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
        {/* Article Header */}
        <div className="article-header">
          <h1 className="display-4">Exploring a Beautiful Destination</h1>
          <p>
            By: <span>John Doe</span> | 17 October, 2023
          </p>
        </div>
        {/* Article Content and Gallery */}
        <div className="container article-content">
          <div className="row">
            <div className="col-md-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nec metus sed est fermentum malesuada. Nullam vel risus vel nisi
                tempus vestibulum at in erat. Proin consectetur metus in mauris
                fringilla, id gravida velit consectetur. Integer id dolor vel
                est commodo scelerisque non at lacus. Vivamus vel fermentum
                odio. Curabitur ut ex vel libero sagittis laoreet at a nisl.
                Aenean lacinia ligula et nisi blandit, a elementum nunc
                efficitur. Sed euismod, tortor ac dapibus bibendum, augue sapien
                dapibus metus, id cursus elit justo id nisi. Ut non ex a ligula
                aliquam tincidunt eu ut quam. Fusce nec risus hendrerit,
                imperdiet mauris vel, tempus odio. Quisque id diam vitae elit
                maximus efficitur. Phasellus nec diam a sem tempus luctus vitae
                sit amet justo. Nulla facilisi. In id mi ut sapien tincidunt
                rhoncus non id libero. Vivamus at ex sed turpis venenatis
                finibus a et tellus.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <div
                id="galleryCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={aimg1}
                      alt="Gallery Image 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={aimg2}
                      alt="Gallery Image 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={aimg3}
                      alt="Gallery Image 3"
                    />
                    {/* Add more images as needed */}
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#galleryCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#galleryCarousel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Likes, Comments, and Comment Form */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="likes-comments-a">
                <div className="like-comment-icons">
                  <div className="like-button">
                    <i className="far fa-thumbs-up like-icon" />
                  </div>
                  <p>50</p>
                  <i className="far fa-comment comment-icon" />
                  <p>10</p>
                </div>
              </div>
              {/* Comment Form */}
              <div className="comment-form">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <textarea
                        className="form-control"
                        placeholder="Write your comment..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Post Comment
                  </button>
                </form>
              </div>
              {/* Existing Comments */}
              <div className="existing-comments">
                {/* Comment 1 */}
                <div className="comment">
                  <div className="comment-user">
                    <img src={uimg} alt="User 1" />
                    <p>John Doe</p>
                  </div>
                  <p>
                    This is an amazing article! I would love to visit this
                    destination.
                  </p>
                  <p className="comment-date">17 October, 2023</p>
                </div>
                {/* Comment 2 */}
                <div className="comment">
                  <div className="comment-user">
                    <img src={uimg} alt="User 2" />
                    <p>Jane Smith</p>
                  </div>

                  <p>
                    Thank you for sharing this wonderful experience. The
                    pictures are breathtaking!
                  </p>
                  <p className="comment-date">19 October, 2023</p>
                </div>
                {/* Add more comments as needed */}
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

export default Article;
