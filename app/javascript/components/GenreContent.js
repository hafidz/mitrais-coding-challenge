import { message } from "antd";
import React from "react";

class Content extends React.Component {
  state = { movies: [] };

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie = () => {
    const url = "api/v1/genre";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("network error");
      })
      .then((data) => {
        data.forEach((genre) => {
          const newMovie = {
            key: genre.id,
            id: genre.id,
            name: genre.name,
          };

          this.setState((prevState) => ({
            movies: [...prevState.movies, newMovie],
          }));
        });
      })
      .catch((err) => message.error("Error : " + err));
  };
  reloadMovie = () => {
    this.setState({ movies: [] });
    this.loadMovie();
  };

  render() {
    return (
      <div className="tiles-wrap">
        {this.state.movies.map((movie) => {
          return (
            <div className="tiles-item reveal-from-bottom" key={movie.key}>
              <div className="tiles-item-inner has-shadow">
                <div className="pricing-item-content">
                  <h4 className="pricing-item-header pb-24 mb-24 center-content">
                    {movie.name}
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Content;
