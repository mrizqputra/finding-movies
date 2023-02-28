import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      query: "",
    },
    validationSchema: Yup.string({
      query: Yup.string().required("Required"),
    }),
    onSubmit: () => {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/search/multi`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
            query: `${searchValue}`,
          },
        })
        .then((response) => {
          // e.preventDefault();
          // code below for check data get
          console.log("datas => ", response);
          setSearchResult(response.data.results.filter((value) => value.profile_path !== null));
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  // console.log(searchResult);

  const searchDirect = (results) => {
    if (results.media_type === "movie") {
    return `/movie/${results.id}`
    }
    if (results.media_type === "tv") {
      return `/tv/${results.id}`
      }
  };

  const resultWrap = () => {
    if (searchResult === null) {
      return null;
    }
    if (searchResult !== null) {
      return (
        <>
        <div className="bg-white container mt-3 shadow rounded">
          <h3>this is movie by search</h3>
          <div id="carouselSearch" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row">
                  {searchResult
                    .filter((results) => results.poster_path !== null)
                    .map((results) => {
                      return (
                        <>
                          <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card">
                              <Link to={searchDirect(results)}>
                              <img
                                src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                                className="card-img-top"
                                alt={`${results.title}.jpg`}
                              />
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })
                    .slice(0, 4)}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {searchResult
                    .filter((results) => results.poster_path !== null)
                    .map((results) => {
                      return (
                        <>
                          <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card">
                              <img
                                src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                                className="card-img-top"
                                alt={`${results.title}.jpg`}
                              />
                            </div>
                          </div>
                        </>
                      );
                    })
                    .slice(4, 8)}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {searchResult
                    .filter((results) => results.poster_path !== null)
                    .map((results) => {
                      return (
                        <>
                          <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card">
                              <img
                                src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                                className="card-img-top"
                                alt={`${results.title}.jpg`}
                              />
                            </div>
                          </div>
                        </>
                      );
                    })
                    .slice(8, 12)}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {searchResult
                    .filter((results) => results.poster_path !== null)
                    .map((results) => {
                      return (
                        <>
                          <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card">
                              <img
                                src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                                className="card-img-top"
                                alt={`${results.title}.jpg`}
                              />
                            </div>
                          </div>
                        </>
                      );
                    })
                    .slice(12, 16)}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row">
                  {searchResult
                    .filter((results) => results.poster_path !== null)
                    .map((results) => {
                      return (
                        <>
                          <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card">
                              <img
                                src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                                className="card-img-top"
                                alt={`${results.title}.jpg`}
                              />
                            </div>
                          </div>
                        </>
                      );
                    })
                    .slice(16, 20)}
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselSearch"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselSearch"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        </>
      )
    }
  };

  return (
    <>
      <div className="container mb-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputsearch" className="form-label">
              Search Movie
            </label>
            <input
              type="text"
              className="form-control"
              id="inputsearch"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.search}
            />
            {formik.touched.search && formik.errors.search ? (
              <div>{formik.errors.search}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
        {resultWrap()}
      </div>
    </>
  );
};

export default Search;
