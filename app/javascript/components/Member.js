import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

export default function Member() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <section className="features-tiles section">
          <div className="container">Member Area</div>
          <h3>Token : </h3>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
