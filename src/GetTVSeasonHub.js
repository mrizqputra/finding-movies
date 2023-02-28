import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetTVSeasonsDetail = () => {
    const [detailSeasonTV, setDetailSeasonTV] = useState(null);

    useEffect(() => {
        const tvid = window.location.pathname.split('/tv/')[1].split('/')[0];
        console.log("this TV Seasons id =>", tvid);
        const seasonNumber = window.location.pathname.split('/season/')[1]
        console.log("this TV Seasons id =>", seasonNumber);

        axios
            .get(`${process.env.REACT_APP_BASE_URL}/tv/${tvid}/season/${seasonNumber}`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY,
                },
            })
            .then((response) => {
                // code below for check data get
                console.log("detail season => ", response.data);
                setDetailSeasonTV(response.data);
            });
    }, []);

    console.log(detailSeasonTV);

    if (detailSeasonTV === null) {
        return null;
    }

    return (
        <>
            <div className="container mb-3">
                <div className='row mb-3'>
                    <div className='col-md-4 col-12 text-center mb-3'>
                        <div className="fs-3 fw-bold mb-1">{detailSeasonTV.name}</div>
                        <img
                            src={`${process.env.REACT_APP_IMG_PATH}/${detailSeasonTV.poster_path}`}
                            className="card-img-top h-75 w-75"
                            alt={`${detailSeasonTV.name}.jpg`}
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
                                <button class="nav-link" id="rating-tab" data-bs-toggle="tab" data-bs-target="#rating-tab-pane" type="button" role="tab" aria-controls="rating-tab-pane" aria-selected="false">Episode</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="detail-tab-pane" role="tabpanel" aria-labelledby="detail-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Overview:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailSeasonTV.overview}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">TV Episode ID:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailSeasonTV.id}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Air Date:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailSeasonTV.air_date}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Number of Seasons:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailSeasonTV.season_number}</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="tab-pane fade" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
                                ...
                            </div> */}
                            <div class="tab-pane fade" id="rating-tab-pane" role="tabpanel" aria-labelledby="rating-tab" tabindex="0">
                                <div className='row'>
                                    {Object.values(detailSeasonTV.episodes).map((value) => {
                                        return (
                                            <>
                                                <div className="col-lg-3 mb-3">
                                                    <div className="card shadow">
                                                        <Link to={`/tv/${window.location.pathname.split('/tv/')[1].split('/')[0]}/season/${window.location.pathname.split('/season/')[1]}/episode/${value.episode_number}`}>
                                                            <div className="fs-6">Episode {value.episode_number}</div>
                                                            <img
                                                                src={`${process.env.REACT_APP_IMG_PATH}/${value.still_path}`}
                                                                className="card-img-top shadow"
                                                                alt={`${value.name}.jpg`}
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetTVSeasonsDetail;
