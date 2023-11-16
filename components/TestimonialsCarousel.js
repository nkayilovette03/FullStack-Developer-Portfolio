import React from "react";
import Head from "next/head";

const TestimonialsCarousel = () => {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
        ></script>
        <link href="lib/icofont/icofont.min.css" rel="stylesheet" />
        <link href="lib/remixicon/remixicon.css" rel="stylesheet" />
        <link href="lib/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="col-lg-10 offset-lg-1 pt-5 pb-5 testimonialBg text-light">
        <div
          id="client-testimonial-carousel"
          className="carousel slide"
          data-ride="carousel"
          style={{ height: 200 }}
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active text-center p-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  <i className="fa fa-quote-left"></i> Dont't worry if it
                  doesn't work right.If everything did, you'd be out of a job.
                </p>
                <footer className="blockquote-footer">
                  Chacodaar <cite title="Source Title">Millano</cite>
                </footer>
                {/* Client review stars */}
                {/* "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star */}
                <p className="client-review-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  {/* <i className="far fa-star"></i> */}
                </p>
              </blockquote>
            </div>
            <div className="carousel-item text-center p-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  <i className="fa fa-quote-left"></i> The computer was born to
                  solve problems that did not exist before.
                </p>
                <footer className="blockquote-footer">
                  Bill <cite title="Source Title">Gates</cite>
                </footer>
                {/* Client review stars  */}
                {/* "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. */}
                <p className="client-review-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </p>
              </blockquote>
            </div>
            <div className="carousel-item text-center p-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  <i className="fa fa-quote-left"></i> Always code as if the guy
                  who ends up maintaning your code will be a violent psychopath
                  who knows where you live.
                </p>
                <footer className="blockquote-footer">
                  Rick <cite title="Source Title">Osborne</cite>
                </footer>
                {/* Client review stars  */}
                {/* "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. */}
                <p className="client-review-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </p>
              </blockquote>
            </div>
            <div className="carousel-item text-center p-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  <i className="fa fa-quote-left"></i> People don't care about
                  what you say, they care about what you build.
                </p>
                <footer className="blockquote-footer">
                  Mark <cite title="Source Title">Zuckerberg</cite>
                </footer>
                {/* Client review stars  */}
                {/* "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. */}
                <p className="client-review-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </p>
              </blockquote>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#client-testimonial-carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li
              data-target="#client-testimonial-carousel"
              data-slide-to="1"
            ></li>
            <li
              data-target="#client-testimonial-carousel"
              data-slide-to="2"
            ></li>
            <li
              data-target="#client-testimonial-carousel"
              data-slide-to="3"
            ></li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCarousel;
