import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GenreContent from "./GenreContent";

export default function Genre() {
  return (
    <div>
      <Header></Header>
      <div className="clearfix">&nbsp;&nbsp;</div>
      <section class="pricing section">
        <div class="container">
          <div class="pricing-inner section-inner has-top-divider">
            <div class="section-header center-content">
              <div class="container-xs">
                <h2 class="mt-0 mb-16">Genre Film</h2>
                <p class="m-0">
                  Lorem ipsum is common placeholder text used to demonstrate the
                  graphic elements of a document or visual presentation.
                </p>
              </div>
            </div>
            <GenreContent></GenreContent>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
