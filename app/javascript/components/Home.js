import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="body-wrap">
        <Header></Header>
        <main className="site-content">
          <section className="features-tiles section">
            <div className="container">
              <Content></Content>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
