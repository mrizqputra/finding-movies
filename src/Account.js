import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Account = () => {
    const [accountDetail, setAccountDetail] = useState(null);
    const [ratedMovie, setRatedMovie] = useState(null);
    const [ratedTVshow, setRatedTVShow] = useState(null);
    const [ratedTVepisodes, setRatedTVEpisodes] = useState(null);


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/account`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY,
                    session_id: localStorage.getItem('sessionID'),
                },
            })
            .then((response) => {
                // code below for check data get
                console.log("Account Detail => ", response.data);
                setAccountDetail(response.data);
                axios
                    .all([
                        axios.get(`${process.env.REACT_APP_BASE_URL}/account/${response.data.id}/rated/movies`, {
                            params: {
                                api_key: process.env.REACT_APP_TMDB_KEY,
                                session_id: localStorage.getItem('sessionID'),
                            },
                        }),
                        axios.get(`${process.env.REACT_APP_BASE_URL}/account/${response.data.id}/rated/tv`, {
                            params: {
                                api_key: process.env.REACT_APP_TMDB_KEY,
                                session_id: localStorage.getItem('sessionID'),
                            },
                        }),
                        axios.get(`${process.env.REACT_APP_BASE_URL}/account/${response.data.id}/rated/tv/episodes`, {
                            params: {
                                api_key: process.env.REACT_APP_TMDB_KEY,
                                session_id: localStorage.getItem('sessionID'),
                            },
                        }),
                    ])
                    .then(
                        axios.spread((data1, data2, data3) => {
                            // output of req.
                            console.log(
                                "Rated Movie =",
                                data1,
                                "Rated TV Show =",
                                data2,
                                "Rated TV Episodes =",
                                data3,
                            );
                            // return data to state
                            setRatedMovie(data1.data);
                            setRatedTVShow(data2.data);
                            setRatedTVEpisodes(data2.data);
                        })
                    )
            }, []);
    }, []);

    const wrapRatedMovie = (ratedMovie) => {
        if (ratedMovie === null) {
            return null;
        }
        return (
            <>
                {Object.values(ratedMovie.results).map((value) => {
                    return (
                        <>
                            <div className="col-lg-3 mb-3">
                                <div className="card shadow p-2">
                                    <Link to={`/movie/${value.id}`}>
                                        <div className="fs-6 text-center">{value.title}</div>
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
            </>
        )
    };

    const wrapRatedTVshow = (ratedTVshow) => {
        if (ratedTVshow === null) {
            return null;
        }
        return (
            <>
                {Object.values(ratedTVshow.results).map((value) => {
                    return (
                        <>
                            <div className="col-lg-3 mb-3">
                                <div className="card shadow p-2">
                                    <Link to={`/tv/${value.id}`}>
                                        <div className="fs-6 text-center">{value.name}</div>
                                        <img
                                            src={`${process.env.REACT_APP_IMG_PATH}/${value.poster_path}`}
                                            className="card-img-top shadow"
                                            alt={`${value.name}.jpg`}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    };

    const wrapRatedTVepisodes = (ratedTVepisodes) => {
        if (ratedTVepisodes === null) {
            return null;
        }
        return (
            <>
                {Object.values(ratedTVepisodes.results).map((value) => {
                    return (
                        <>
                            <div className="col-lg-3 mb-3">
                                <div className="card shadow p-2">
                                    <Link to={`/tv/${value.id}`}>
                                        <div className="fs-6 text-center">{value.name}</div>
                                        <img
                                            src={`${process.env.REACT_APP_IMG_PATH}/${value.poster_path}`}
                                            className="card-img-top shadow"
                                            alt={`${value.name}.jpg`}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    };

    if (accountDetail === null) {
        return null
    }
    return (
        <div className='container mb-3'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-3 text-center'>
                    <img
                        src={`${process.env.REACT_APP_IMG_PATH}/${accountDetail.avatar.tmdb.avatar_path}`}
                        className="card-img-top rounded-circle"
                        alt={`${accountDetail.username}.jpg`}
                    />
                    <div className="fs-1">{accountDetail.username}</div>
                    <div className="fs-5">ID: {accountDetail.id}</div>
                </div>
                <div className='col-12 col-md-9 mb-3'>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="ratedMovie-tab" data-bs-toggle="tab" data-bs-target="#ratedMovie-tab-pane" type="button" role="tab" aria-controls="ratedMovie-tab-pane" aria-selected="true">Rated Movie</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="ratedTVshow-tab" data-bs-toggle="tab" data-bs-target="#ratedTVshow-tab-pane" type="button" role="tab" aria-controls="ratedTVshow-tab-pane" aria-selected="false">Rated TV Show</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="ratedTVepisodes-tab" data-bs-toggle="tab" data-bs-target="#ratedTVepisodes-tab-pane" type="button" role="tab" aria-controls="ratedTVepisodes-tab-pane" aria-selected="false">Rated TV Episode</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active bg-white shadow rounded p-3" id="ratedMovie-tab-pane" role="tabpanel" aria-labelledby="ratedMovie-tab" tabindex="0">
                            {wrapRatedMovie(ratedMovie)}
                        </div>
                        <div class="tab-pane fade bg-white shadow rounded p-3" id="ratedTVshow-tab-pane" role="tabpanel" aria-labelledby="ratedTVshow-tab" tabindex="0">
                            {wrapRatedTVshow(ratedTVshow)}
                        </div>
                        <div class="tab-pane fade bg-white shadow rounded p-3" id="ratedTVepisodes-tab-pane" role="tabpanel" aria-labelledby="ratedTVepisodes-tab" tabindex="0">
                            {wrapRatedTVepisodes(ratedTVepisodes)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
