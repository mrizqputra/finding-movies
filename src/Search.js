// import { useState } from "react";
import axios from "axios";

const Search = () => {
  // const [searchResult, setSearchResult] = useState([]);

  const searchMovie = (searchValue) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/search/multi`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          query: searchValue,
        },
      })
      .then((response) => {
        // code below for check data get
        response.preventDefault();
        console.log("datas => ", response.data.results);
        // setSearchResult(response.data.results);
      });
  };

  // console.log(searchResult);

  return (
    <>
      <div className="container mb-3">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Search Movie
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button type="submit" class="btn btn-dark" onClick={searchMovie}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
