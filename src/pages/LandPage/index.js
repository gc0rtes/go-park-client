import React from "react";
import { Link } from "react-router-dom";

import "./carousel.css";
import slide1 from "../../resources/images/park8.jpg";
import slide2 from "../../resources/images/park9.jpg";
import slide3 from "../../resources/images/park3.png";
import zuiderpark from "../../resources/images/zuiderpark1.jpg";
import westbroekpark from "../../resources/images/westbroekp1.jpg";
import westerpark from "../../resources/images/westerpark.jpg";
import noorderpark from "../../resources/images/noorderpark.jpg";

export default function LandPage() {
  return (
    <div>
      <div
        id="myCarousel"
        class="carousel slide container py-3"
        data-bs-ride="carousel"
      >
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
            <img class="d-block img-fluid  " src={slide1} alt="first slide" />

            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Connecting parks in my city</h1>
                <p>
                  Fun events with a new social community. Meet new people
                  through social, fitness and creative events, classes and
                  workshops.
                </p>
                <p>
                  <Link class="btn btn-lg btn-primary" to="/search">
                    Explore now
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src={slide2} alt="first slide" />

            <div class="container">
              <div class="carousel-caption">
                <h1>You can start a event with just a few clicks.</h1>
                <p>
                  Users can also register for events, using GoPark's search
                  engine to find events close to them, of a specific type, or
                  within their.
                </p>
                <p>
                  <Link class="btn btn-lg btn-primary" to="/postevent">
                    Add Event
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src={slide3} alt="first slide" />

            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good reason.</h1>
                <p>
                  built it on mobile-first so you can actually do pretty much
                  everything on your handset instead of going online.
                </p>
                <p>
                  <Link class="btn btn-lg btn-primary" to="/signup">
                    Sign Up
                  </Link>
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
              Zuiderpark - The Hague.{" "}
              <span class="text-muted">
                With 108 hectares and plenty of space to have fun.
              </span>
            </h2>
            <p class="lead px-3">
              One of the largest parks in The Hague, it is easily reachable by
              public transport and hosts several play fields, a playground, a
              skate park, BBQ spots and many other great facilities – a perfect
              place for a day out.
            </p>
          </div>
          <div class="col-md-5 p-3">
            <img
              class="featurette-image img-fluid rounded"
              style={{ width: "500px", height: "100%" }}
              src={zuiderpark}
              alt="first slide"
            />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette shadow">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Westbroekpark - The Hague.{" "}
              <span class="text-muted">See for yourself.</span>
            </h2>
            <p class="lead">
              Westbroekpark is one of the most beautiful parks in The Hague. The
              park was created during the nineteen twenties according to a
              design by Pieter Westbroek. When the weather is nice many
              youngsters and families come to Westbroekpark to enjoy a game of
              soccer and a picnic.
            </p>
          </div>
          <div class="col-md-5 order-md-1 p-3">
            <img
              class="featurette-image img-fluid rounded"
              style={{ width: "500px", height: "100%" }}
              src={westbroekpark}
              alt="westbroekpark"
            />
          </div>
        </div>

        <hr class="featurette-divider" />
        <div class="row featurette shadow">
          <div class="col-md-7">
            <h2 class="featurette-heading px-3">
              Westerpark - Amsterdam.{" "}
              <span class="text-muted">It’ll blow your mind.</span>
            </h2>
            <p class="lead px-3">
              Adjacent to the centre lies the lively Westerpark neighbourhood,
              part of Amsterdam West. Home to the eponymous park, which combines
              expansive greenery with the wealth of cultural goings on at
              Westergas, this lively neighbourhood is home to a varied mix of
              independent shops, old-school street markets, shiny new
              restaurants and traditional brown cafés.
            </p>
          </div>
          <div class="col-md-5 p-3">
            <img
              class="featurette-image img-fluid rounded"
              style={{ width: "500px", height: "100%" }}
              src={westerpark}
              alt="first slide"
            />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette shadow">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Noorderpark - Amsterdam.{" "}
              <span class="text-muted">We make the park!</span>
            </h2>
            <p class="lead">
              The Noorderpark bridges the gap in Noord. Sniffing nature and
              culture, playing, moving, relaxing, meeting new people, doing odd
              jobs or doing something for the neighbourhood; it's all possible
              in the Noorderpark!
            </p>
          </div>
          <div class="col-md-5 order-md-1 p-3">
            <img
              class="featurette-image img-fluid rounded"
              style={{ width: "500px", height: "100%" }}
              src={noorderpark}
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
          2021 by Guilherme Cortes &middot;{" "}
          <a href="https://github.com/gc0rtes">Contact</a>
        </p>
      </footer>
    </div>
  );
}
