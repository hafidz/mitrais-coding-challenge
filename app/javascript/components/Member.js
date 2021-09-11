import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import useToken from "./useToken";

export default function Member() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <section className="pricing section">
          <div className="pricing-inner section-inner has-top-divider">
            <div className="container-sm">
              <h4>Member Area</h4>
              <h6>
                Token : <br /> {token}
              </h6>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
