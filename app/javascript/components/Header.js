import React from "react";

export default function Header() {
  return (
    <header className="site-header reveal-from-bottom">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <a href="/">
                <img src="assets/logo.png" alt="Cube" width="70" height="70" />
              </a>
            </h1>
          </div>
          <button
            id="header-nav-toggle"
            className="header-nav-toggle"
            aria-controls="primary-menu"
            aria-expanded="false"
          >
            <span className="screen-reader">Menu</span>
            <span className="hamburger">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <nav id="header-nav" className="header-nav">
            <div className="header-nav-inner">
              <ul className="list-reset text-xxs header-nav-right">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Trending</a>
                </li>
                <li>
                  <a href="/genre">Genre Movie</a>
                </li>
                <li>
                  <a href="/api">Api</a>
                </li>
              </ul>
              <ul className="list-reset header-nav-right">
                <li>
                  <a
                    className="
												button
												button-primary
												button-wide-mobile
												button-sm
											"
                    href="/members"
                  >
                    Member Area
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
