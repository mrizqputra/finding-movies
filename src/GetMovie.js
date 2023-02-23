import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetMovie = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/now_playing`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
          },
        }),
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
          },
        }),
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/upcoming`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
          },
        }),
      ])
      .then(
        axios.spread((data1, data2, data3) => {
          // output of req.
          console.log(
            "Now Playing =",
            data1,
            "Popular =",
            data2,
            "Upcoming =",
            data3
          );
          // return data to state
          setNowPlayingMovies(data1.data.results);
          setPopularMovies(data2.data.results);
          setUpcomingMovies(data3.data.results);
        })
      );
  }, []);

  return (
    <div className="container mb-3">
      <nav>
        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-nowplaying-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-nowplaying"
            type="button"
            role="tab"
            aria-controls="nav-nowplaying"
            aria-selected="true"
          >
            Now Playing
          </button>
          <button
            className="nav-link"
            id="nav-popular-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-popular"
            type="button"
            role="tab"
            aria-controls="nav-popular"
            aria-selected="false"
          >
            Popular
          </button>
          <button
            className="nav-link"
            id="nav-upcoming-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-upcoming"
            type="button"
            role="tab"
            aria-controls="nav-upcoming"
            aria-selected="false"
          >
            Upcoming
          </button>
          <button
            className="nav-link"
            id="nav-disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-disabled"
            type="button"
            role="tab"
            aria-controls="nav-disabled"
            aria-selected="false"
            disabled
          >
            Disabled
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active mb-3"
          id="nav-nowplaying"
          role="tabpanel"
          aria-labelledby="nav-nowplaying-tab"
          tabindex="0"
        >
          <h3 className="mb-3">This is Now Playing Movies</h3>
          {/* start of carousel on now playing movies */}
          <div
            id="carousel_NowPlayingMovies"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row">
                  {nowPlayingMovies.slice(0, 4).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {nowPlayingMovies.slice(4, 8).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {nowPlayingMovies.slice(8, 12).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {nowPlayingMovies.slice(12, 16).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {nowPlayingMovies.slice(16, 20).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel_NowPlayingMovies"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel_NowPlayingMovies"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* end of carousel on now playing movies */}
        </div>
        <div
          className="tab-pane fade mb-3"
          id="nav-popular"
          role="tabpanel"
          aria-labelledby="nav-popular-tab"
          tabindex="0"
        >
          <h3 className="mb-3">This is Popular Movies</h3>
          {/* start of carousel on popular movies */}
          <div
            id="carousel_PopularMovies"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row">
                  {popularMovies.slice(0, 4).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {popularMovies.slice(4, 8).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {popularMovies.slice(8, 12).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {popularMovies.slice(12, 16).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {popularMovies.slice(16, 20).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel_PopularMovies"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel_PopularMovies"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* end of carousel on popular movies */}
        </div>
        <div
          className="tab-pane fade mb-3"
          id="nav-upcoming"
          role="tabpanel"
          aria-labelledby="nav-upcoming-tab"
          tabindex="0"
        >
          <h3 className="mb-3">This is Upcoming Movies</h3>
          {/* start of carousel on upcoming movies */}
          <div
            id="carousel_UpcomingMovies"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row">
                  {upcomingMovies.slice(0, 4).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {upcomingMovies.slice(4, 8).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {upcomingMovies.slice(8, 12).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {upcomingMovies.slice(12, 16).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {upcomingMovies.slice(16, 20).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/movie/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top"
                              alt={`${results.title}.jpg`}
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel_UpcomingMovies"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel_UpcomingMovies"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* end of carousel on upcoming movies */}
        </div>
        <div
          className="tab-pane fade"
          id="nav-disabled"
          role="tabpanel"
          aria-labelledby="nav-disabled-tab"
          tabindex="0"
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default GetMovie;
