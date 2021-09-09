import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Api() {
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <section className="hero section center-content illustration-section-01">
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <h1
                  className="mt-0 mb-16 reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  Movie Collection Database Api
                </h1>
                <div className="container-xs">
                  <p
                    className="mt-0 mb-32 reveal-from-bottom"
                    data-reveal-delay="400"
                  >
                    Movie Collection Database Api For your Application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing section">
          <div className="pricing-inner section-inner has-top-divider">
            <div className="container-sm">
              <div>
                <h4>Getting Started</h4>
                <p>
                  Welcome to The Movie Collection API. Below you will find a
                  current list of the available methods on our movie, tv, actor
                  and image API. If you need help or support, please head over
                  to our team.
                </p>
                <p>
                  To register for an API key, click setting account in member
                  area page.
                </p>
              </div>
              <div>
                <h4>Authentication</h4>
                <p>
                  Application level authentication on version 3 is controlled by
                  one of either a single query parameter, api_key, or by using
                  your v4 access token as a Bearer token. You can request an API
                  key by logging in to your account on MC and clicking the "API"
                  link in the left hand side bar of your account page.
                </p>
                <p>
                  Once you have been issued a key, an example request looks like
                  this (replacing the <b>api_key</b> text with your own API
                  key):
                </p>
                <h5>http://localhost:3000/movies?api_key=api_key</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
