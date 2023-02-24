import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetDetail = () => {
    const [detailMovie, setDetailMovie] = useState(null);

    useEffect(() => {
        const movieid = window.location.pathname.split('/movie/')[1]
        console.log("this movie id =>", movieid);

        axios
            .get(`${process.env.REACT_APP_BASE_URL}/movie/${movieid}`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY,
                },
            })
            .then((response) => {
                // code below for check data get
                console.log("detail Movie => ", response.data);
                setDetailMovie(response.data);
            });
    }, []);

    console.log(detailMovie);

    if (detailMovie === null) {
        return (
            <>
                <div className="fs-4">
                    <Link to="/">
                        your movie not found, return to home
                    </Link>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container">
                <div className="fs-1">{detailMovie.title}</div>
                <img
                    src={`${process.env.REACT_APP_IMG_PATH}/${detailMovie.poster_path}`}
                    className="card-img-top h-25 w-50"
                    alt={`${detailMovie.title}.jpg`}
                />
                <div className="row">
                    <div className="col-2">
                        <div className="fs-4 fw-bold">Release Date:</div>
                    </div>
                    <div className="col-10">
                        <div className="fs-4 fw-bold">{detailMovie.release_date}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="fs-4">Overview:</div>
                    </div>
                    <div className="col-10">
                        <div className="fs-4">{detailMovie.overview}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="fs-4">Movie Url:</div>
                    </div>
                    <div className="col-10">
                        <div className="fs-4"><a href={detailMovie.homepage} target="blank">{detailMovie.homepage.split("https://")}</a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="fs-4">Rating:</div>
                    </div>
                    <div className="col-10">
                        <div className="fs-4">{detailMovie.vote_average}/{detailMovie.vote_count} vote</div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="fs-4">Genre:</div>
                    </div>
                    <div className="col-10">
                        <div className="fs-4">{Object.values(detailMovie.genres).map((value) => value.name).join(', ')}</div>
                    </div>
                </div>
                {/* <div className="fs-4">Overview: {detailMovie.overview}</div> */}
                {/* <div className="row">
                <div className="col-2">

                </div>
                <div className="col-10">
                    
                </div>
            </div> */}

                {/* <!-- Button trigger modal --> */}
                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Give Rating!
</button> */}

                {/* <!-- Modal --> */}
                {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
            </div>
        </>
    );
}

export default GetDetail;