import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetTV = () => {
  const [tv, setTv] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/tv`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        // code below for check data get
        console.log("tv's => ", response.data.results);
        setTv(response.data.results);
      });
  }, []);

  return (
    <div className="container">
      <h3>this is tv by discover</h3>
        <div
          id="carouselTv"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="row">
                {tv.slice(0, 4).map((results) => {
                  return (
                    <div className="col-lg-3 mb-3">
                      <div className="card">
                        <Link to={`/tv/${results.id}`}>
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
                {tv.slice(4, 8).map((results) => {
                  return (
                    <div className="col-lg-3 mb-3">
                      <div className="card">
                        <img
                          src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                          className="card-img-top"
                          alt={`${results.title}.jpg`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <div className="row">
                {tv.slice(8, 12).map((results) => {
                  return (
                    <div className="col-lg-3 mb-3">
                      <div className="card">
                        <img
                          src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                          className="card-img-top"
                          alt={`${results.title}.jpg`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <div className="row">
                {tv.slice(12, 16).map((results) => {
                  return (
                    <div className="col-lg-3 mb-3">
                      <div className="card">
                        <img
                          src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                          className="card-img-top"
                          alt={`${results.title}.jpg`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <div className="row">
                {tv.slice(16, 20).map((results) => {
                  return (
                    <div className="col-lg-3 mb-3">
                      <div className="card">
                        <img
                          src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                          className="card-img-top"
                          alt={`${results.title}.jpg`}
                        />
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
          data-bs-target="#carouselTv"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselTv"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  );
};

export default GetTV;
