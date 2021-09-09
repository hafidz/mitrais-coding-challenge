import { message } from "antd";
import React from "react";

class Content extends React.Component {
  state = { movies: [] };

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie = () => {
    const url = "api/v1/movies";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("network error");
      })
      .then((data) => {
        data.forEach((movie) => {
          const newMovie = {
            key: movie.id,
            id: movie.id,
            name: movie.name,
            overview: movie.overview,
            poster_url: movie.poster_path,
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
      <div className="features-tiles-inner section-inner">
        <div className="tiles-wrap">
          {this.state.movies.map((movie) => {
            return (
              <div className="tiles-item reveal-from-bottom" key={movie.key}>
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <img
                        className="has-shadow"
                        src={movie.poster_url}
                        alt="Hero image"
                        width="100%"
                        height="504"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">{movie.name}</h4>
                    <p className="m-0 text-sm">{movie.overview}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Content;
