import React from "react";
import "./carousel.css";
import slide1 from "../../resources/images/background4.png";
import slide2 from "../../resources/images/background5.jpg";
import slide3 from "../../resources/images/background6.jpg";

export default function LandPage() {
  return (
    <div>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block img-fluid" src={slide1} alt="first slide" />

            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src={slide2} alt="first slide" />

            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src={slide3} alt="first slide" />

            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* START FEATURETTES */}

      <div class="container marketing">
        <div class="row featurette shadow">
          <div class="col-md-7">
            <h2 class="featurette-heading px-3">
              First featurette heading.{" "}
              <span class="text-muted">It’ll blow your mind.</span>
            </h2>
            <p class="lead px-3">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div class="col-md-5 p-3">
            <img
              class="featurette-image img-fluid rounded"
              style={{ width: "500px", height: "100%" }}
              src={slide1}
              alt="first slide"
            />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette shadow">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span class="text-muted">See for yourself.</span>
            </h2>
            <p class="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div class="col-md-5 order-md-1 p-3">
            <img
              class="featurette-image img-fluid rounded"
              style={{ width: "500px", height: "100%" }}
              src={slide2}
              alt="first slide"
            />
          </div>
        </div>

        <hr class="featurette-divider" />
        <div class="row featurette shadow">
          <div class="col-md-7">
            <h2 class="featurette-heading px-3">
              First featurette heading.{" "}
              <span class="text-muted">It’ll blow your mind.</span>
            </h2>
            <p class="lead px-3">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div class="col-md-5 p-3">
            <img
              class="featurette-image img-fluid rounded"
              style={{ width: "500px", height: "100%" }}
              src={slide3}
              alt="first slide"
            />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette shadow">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span class="text-muted">See for yourself.</span>
            </h2>
            <p class="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div class="col-md-5 order-md-1 p-3">
            <img
              class="featurette-image img-fluid rounded"
              style={{ width: "500px", height: "100%" }}
              src={slide2}
              alt="first slide"
            />
          </div>
        </div>
        <hr class="featurette-divider" />
      </div>
      {/* END FEATURETTES */}
      <footer class="container">
        <p class="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          &copy; 2021 by Guilherme Cortes &middot;{" "}
          <a href="https://github.com/gc0rtes">Contact</a>
        </p>
      </footer>
    </div>
  );
}
