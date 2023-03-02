import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetTV = () => {
  const [onTheAirTV, setOnTheAirTV] = useState([]);
  const [popularTV, setPopularTV] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`${process.env.REACT_APP_BASE_URL}/discover/tv`, {
    //     params: {
    //       api_key: process.env.REACT_APP_TMDB_KEY,
    //     },
    //   })
    //   .then((response) => {
    //     // code below for check data get
    //     console.log("tv's => ", response.data.results);
    //     setTv(response.data.results);
    //   });

    axios
      .all([
        axios.get(`${process.env.REACT_APP_BASE_URL}/tv/on_the_air`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
          },
        }),
        axios.get(`${process.env.REACT_APP_BASE_URL}/tv/popular`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
          },
        }),
      ])
      .then(
        axios.spread((data1, data2) => {
          // output of req.
          console.log("Now Playing =", data1, "Popular =", data2);
          // return data to state
          setOnTheAirTV(data1.data.results);
          setPopularTV(data2.data.results);
        })
      );
  }, []);

  return (
    <div className="container mb-3">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-ontheair-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-ontheair"
            type="button"
            role="tab"
            aria-controls="nav-ontheair"
            aria-selected="true"
          >
            On The Air
          </button>
          <button
            class="nav-link"
            id="nav-populartv-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-populartv"
            type="button"
            role="tab"
            aria-controls="nav-populartv"
            aria-selected="false"
          >
            Popular
          </button>
          {/* <button
            class="nav-link"
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
          </button> */}
        </div>
      </nav>
      <div class="tab-content bg-white shadow rounded" id="nav-tabContent">
        <div
          class="tab-pane fade show active container"
          id="nav-ontheair"
          role="tabpanel"
          aria-labelledby="nav-ontheair-tab"
          tabindex="0"
        >
          <div className="mb-3 fs-2">This is On The Air TV Show</div>
          <div
            id="carousel_ontheair"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row">
                  {onTheAirTV.slice(0, 4).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/tv/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top shadow"
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
                  {onTheAirTV.slice(4, 8).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/tv/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top shadow"
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
                  {onTheAirTV.slice(8, 12).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/tv/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top shadow"
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
                  {onTheAirTV.slice(12, 16).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/tv/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top shadow"
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
                  {onTheAirTV.slice(16, 20).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/tv/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top shadow"
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
              data-bs-target="#carousel_ontheair"
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
              data-bs-target="#carousel_ontheair"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div
          class="tab-pane fade container"
          id="nav-populartv"
          role="tabpanel"
          aria-labelledby="nav-populartv-tab"
          tabindex="0"
        >
          <div className="mb-3 fs-2">This is Popular TV Show</div>
          <div
            id="carousel_populartv"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row">
                  {popularTV.slice(0, 4).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/tv/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top shadow"
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
                  {popularTV.slice(4, 8).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/tv/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top shadow"
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
                  {popularTV.slice(8, 12).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/tv/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top shadow"
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
                  {popularTV.slice(12, 16).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/tv/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top shadow"
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
                  {popularTV.slice(16, 20).map((results) => {
                    return (
                      <div className="col-lg-3 mb-3">
                        <div className="card">
                          <Link to={`/tv/${results.id}`}>
                            <img
                              src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                              className="card-img-top shadow"
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
              data-bs-target="#carousel_populartv"
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
              data-bs-target="#carousel_populartv"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div
          class="tab-pane fade"
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

export default GetTV;
