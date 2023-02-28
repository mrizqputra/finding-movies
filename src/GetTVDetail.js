import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetDetailTV = () => {
    const [detailTV, setDetailTV] = useState(null);

    useEffect(() => {
        const tvid = window.location.pathname.split('/tv/')[1]
        console.log("this movie id =>", tvid);

        axios
            .get(`${process.env.REACT_APP_BASE_URL}/tv/${tvid}`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY,
                },
            })
            .then((response) => {
                // code below for check data get
                console.log("detail TV => ", response.data);
                setDetailTV(response.data);
            });
    }, []);

    console.log(detailTV);

    if (detailTV === null) {
        return (
            <>
                <div className="fs-4">
                    <Link to="/">
                        your TV detail not found, return to home
                    </Link>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container mb-3">
                <div className='row mb-3'>
                    <div className='col-md-4 col-12 text-center mb-3'>
                        <div className="fs-3 fw-bold mb-1">{detailTV.title}</div>
                        <img
                            src={`${process.env.REACT_APP_IMG_PATH}/${detailTV.poster_path}`}
                            className="card-img-top h-75 w-75"
                            alt={`${detailTV.title}.jpg`}
                        />
                    </div>
                    <div className='col-md-8 col-sm-12 mb-3'>
                        <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="detail-tab" data-bs-toggle="tab" data-bs-target="#detail-tab-pane" type="button" role="tab" aria-controls="detail-tab-pane" aria-selected="true">Detail</button>
                            </li>
                            {/* <li class="nav-item" role="presentation">
                                <button class="nav-link" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="false">Overview</button>
                            </li> */}
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="rating-tab" data-bs-toggle="tab" data-bs-target="#rating-tab-pane" type="button" role="tab" aria-controls="rating-tab-pane" aria-selected="false">Rating</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="detail-tab-pane" role="tabpanel" aria-labelledby="detail-tab" tabindex="0">
                                <div className="row">
                                    <div className="fs-4 fst-italic fw-bold">"{detailTV.tagline}"</div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Overview:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailTV.overview}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">TV ID:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailTV.id}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Status:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailTV.status}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">First Air Date:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailTV.first_air_date}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Last Air Date:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailTV.last_air_date}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Number of Seasons:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailTV.number_of_seasons}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Number of Episodes:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailTV.number_of_episodes}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Language:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailTV.original_language}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Movie Url:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6"><a href={detailTV.homepage} target="blank">{detailTV.homepage.split("https://")}</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Genre:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{Object.values(detailTV.genres).map((value) => value.name).join(', ')}</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="tab-pane fade" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
                                ...
                            </div> */}
                            <div class="tab-pane fade" id="rating-tab-pane" role="tabpanel" aria-labelledby="rating-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Rating:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailTV.vote_average}/{detailTV.vote_count} voter</div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    {Object.values(detailTV.seasons).map((value) => {
                        return (
                            <>
                                <div className="col-lg-3 mb-3">
                                    <div className="card shadow">
                                        <Link to={`/tv/${detailTV.id}/season/${value.season_number}`}>
                                            <img
                                                src={`${process.env.REACT_APP_IMG_PATH}/${value.poster_path}`}
                                                className="card-img-top shadow"
                                                alt={`${value.title}.jpg`}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default GetDetailTV;
