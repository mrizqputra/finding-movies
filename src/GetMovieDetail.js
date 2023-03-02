import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetMovieDetail = () => {
    const [detailMovie, setDetailMovie] = useState(null);
    const [creditMovie, setCreditMovie] = useState(null);

    useEffect(() => {
        const movieid = window.location.pathname.split('/movie/')[1]
        // console.log("this movie id =>", movieid);

        axios
            .all([
                axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${movieid}`, {
                    params: {
                        api_key: process.env.REACT_APP_TMDB_KEY,
                    },
                }),
                axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${movieid}/credits`, {
                    params: {
                        api_key: process.env.REACT_APP_TMDB_KEY,
                    },
                }),
            ])
            .then(
                axios.spread((data1, data2) => {
                    // output of req.
                    console.log(
                        "Detail Movie =",
                        data1,
                        "Credit Movie =",
                        data2,
                    );
                    // return data to state
                    setDetailMovie(data1.data);
                    setCreditMovie(data2.data);
                })
            );
    }, []);

    console.log(detailMovie);
    console.log(creditMovie);

    if (detailMovie === null) {
        return (
            <>
                <div className="fs-4">
                    <Link to="/">
                        your movie not found, return to detail
                    </Link>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container mb-3">
                <div className='row'>
                    <div className='col-md-4 col-12 text-center'>
                        <div className="fs-4 fw-bold mb-1">{detailMovie.title}</div>
                        <img
                            src={`${process.env.REACT_APP_IMG_PATH}/${detailMovie.poster_path}`}
                            className="card-img-top h-75 w-75 shadow"
                            alt={`${detailMovie.title}.jpg`}
                        />
                    </div>
                    <div className='col-md-8 col-12'>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="detail-tab" data-bs-toggle="tab" data-bs-target="#detail-tab-pane" type="button" role="tab" aria-controls="detail-tab-pane" aria-selected="true">Detail</button>
                            </li>
                            {/* <li class="nav-item" role="presentation">
                                <button class="nav-link" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="false">Overview</button>
                            </li> */}
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="rating-tab" data-bs-toggle="tab" data-bs-target="#rating-tab-pane" type="button" role="tab" aria-controls="rating-tab-pane" aria-selected="false">Rating</button>
                            </li>
                            {/* <li class="nav-item" role="presentation">
                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
                            </li> */}
                        </ul>
                        <div class="tab-content bg-white shadow rounded" id="myTabContent">
                            <div class="tab-pane fade show active p-3" id="detail-tab-pane" role="tabpanel" aria-labelledby="detail-tab" tabindex="0">
                                <div className="row">
                                    <div className="fs-4 fst-italic fw-bold">"{detailMovie.tagline}"</div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Overview:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailMovie.overview}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Movie ID:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailMovie.id}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Release Status:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailMovie.status}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Release Date:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailMovie.release_date}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Language:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailMovie.original_language}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Movie Url:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6"><a href={detailMovie.homepage} target="blank">{detailMovie.homepage.split("https://")}</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Genre:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{Object.values(detailMovie.genres).map((value) => value.name).join(', ')}</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="tab-pane fade" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
                                ...
                            </div> */}
                            <div class="tab-pane fade p-3" id="rating-tab-pane" role="tabpanel" aria-labelledby="rating-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6 fw-bold">Rating:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6 fw-bold">{detailMovie.vote_average}/{detailMovie.vote_count} voter</div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
                        </div>
                    </div>
                </div>
                <div className="container bg-white rounded shadow">
                    <div className='row'>
                        <div className='fs-4 fw-bold mb-3'>Movie Cast</div>
                        {Object.values(creditMovie.cast).filter((value) => value.profile_path !== null).map((value) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-6 mb-3">
                                        <div className="card shadow">
                                            <Link to={`/person/${value.id}`}>
                                                <img
                                                    src={`${process.env.REACT_APP_IMG_PATH}/${value.profile_path}`}
                                                    className="card-img-top shadow"
                                                    alt={`${value.name}.jpg`}
                                                />
                                                <div className="fs-6 fw-bold">{value.name} as "{value.character}"</div>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetMovieDetail;
