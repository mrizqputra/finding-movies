import { useEffect, useState } from "react";
import axios from "axios";

const GetMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        // code below for check data get
        // console.log("datas => ", response.data.results);
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div className="container">
      <h3>this is movie by discover</h3>
      <div
        id="carouselMovie"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div className="row">
              {movies.slice(0, 4).map((results) => {
                return (
                  <div className="col-md-6 col-lg-3 mb-3">
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
          <div class="carousel-item" data-bs-interval="10000">
            <div className="row">
              {movies.slice(4, 8).map((results) => {
                return (
                  <div className="col-md-6 col-lg-3 mb-3">
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
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMovie"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselMovie"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default GetMovie;