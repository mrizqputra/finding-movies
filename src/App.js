import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';

async function generateSearch() {
  // async/await
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/authentication/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    })
    return response.data
  } catch (e) {
    console.error(e)
    return null
  }
}

function App() {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
    }),
    onSubmit: values => {
      generateSearch()
        .then(requestMovies => {
          axios({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}/search/movie`,
            params: {
              api_key: process.env.REACT_APP_TMDB_KEY,
              query: values.search,
            }
          })
        });
      },
  });


  const [movies, setMovies] = useState([])
  useEffect(() => {
    // console.log(response.data.results);
    // }).then((response) => {
      // code below for check data get
      // console.log("datas => ", response.data.results);
      setMovies(response.data.results);
    }, [])

  return (
    <div className="container-fluid">
      <h1>Welcome to Finding Movie</h1>
      <form className="d-flex" role="search">
        <input
          id="search"
          name="search"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.search}
          className="input-group mb-3"
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="row grid">
        {movies.map((results, index) => {
          return (
            <div className="col-md-3">
              <div className="card">
                <img src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{results.title}</h5>
                  <p className="card-text">{results.overview}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">movie id: {results.id}</li>
                  <li className="list-group-item">popularity: {results.popularity}</li>
                  <li className="list-group-item">Release Date: {results.release_date}</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Add</a>
                  <a href="#" className="card-link">Delete</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
