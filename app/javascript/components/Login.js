import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

const csrf = document
  .querySelector("meta[name='csrf-token']")
  .getAttribute("content");

async function loginUser(credentials) {
  return fetch("http://localhost:3000/api/v1/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrf,
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <section className="pricing section">
          <div className="pricing-inner section-inner has-top-divider">
            <div className="container-sm">
              <div className="login-wrapper">
                <h4>Login Member Area</h4>
                <form onSubmit={handleSubmit}>
                  <label>
                    <p>Username</p>
                    <input
                      type="text"
                      className="form-input"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </label>
                  <label>
                    <p>Password</p>
                    <input
                      type="password"
                      className="form-input"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <div className="clearfix">&nbsp;</div>
                  <div>
                    <button
                      type="submit"
                      className=" button button-primary button-wide-mobile button-sm"
                    >
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
