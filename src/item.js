import { useEffect, useState } from "react";
import axios from "axios";

const Item = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            // code below for check data get
            // console.log("datas => ", response.data.results);
            setMovies(response.data.results);
        })
    }, [])

    return (
        <div className="container">
            <h3>this is movie by discover</h3>
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
    )
}

export default Item;