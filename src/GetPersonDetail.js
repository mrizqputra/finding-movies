import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetPersonDetail = () => {
    const [detailPerson, setDetailPerson] = useState(null);
    const [personCreditMovie, setPersonCreditMovie] = useState(null);
    const [personCreditTV, setPersonCreditTV] = useState(null);

    useEffect(() => {
        const personid = window.location.pathname.split('/person/')[1]
        // console.log("this movie id =>", personid);

        axios
            .all([
                axios.get(`${process.env.REACT_APP_BASE_URL}/person/${personid}`, {
                    params: {
                        api_key: process.env.REACT_APP_TMDB_KEY,
                    },
                }),
                axios.get(`${process.env.REACT_APP_BASE_URL}/person/${personid}/movie_credits`, {
                    params: {
                        api_key: process.env.REACT_APP_TMDB_KEY,
                    },
                }),
                axios.get(`${process.env.REACT_APP_BASE_URL}/person/${personid}/tv_credits`, {
                    params: {
                        api_key: process.env.REACT_APP_TMDB_KEY,
                    },
                }),

            ])
            .then(
                axios.spread((data1, data2, data3) => {
                    // output of req.
                    console.log(
                        "Detail Person =",
                        data1,
                        "Credit Movie =",
                        data2,
                        "Credit TV =",
                        data3,
                    );
                    // return data to state
                    setDetailPerson(data1.data);
                    setPersonCreditMovie(data2.data);
                    setPersonCreditTV(data3.data);
                })
            );
    }, []);

    console.log(detailPerson);
    console.log(personCreditMovie);
    console.log(personCreditTV);

    if (detailPerson === null) {
        return (
            <>
                <div className="fs-4">
                    <Link to="/">
                        your detail person not found, return to detail
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
                        <div className="fs-4 fw-bold mb-1">{detailPerson.name}</div>
                        <img
                            src={`${process.env.REACT_APP_IMG_PATH}/${detailPerson.profile_path}`}
                            className="card-img-top h-75 w-75 shadow"
                            alt={`${detailPerson.name}.jpg`}
                        />
                    </div>
                    <div className='col-md-8 col-12 mb-3'>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="detail-tab" data-bs-toggle="tab" data-bs-target="#detail-tab-pane" type="button" role="tab" aria-controls="detail-tab-pane" aria-selected="true">Detail</button>
                            </li>
                            {/* <li class="nav-item" role="presentation">
                                <button class="nav-link" id="rating-tab" data-bs-toggle="tab" data-bs-target="#rating-tab-pane" type="button" role="tab" aria-controls="rating-tab-pane" aria-selected="false">Rating</button>
                            </li> */}
                        </ul>
                        <div class="tab-content bg-white shadow rounded" id="myTabContent">
                            <div class="tab-pane fade show active p-3" id="detail-tab-pane" role="tabpanel" aria-labelledby="detail-tab" tabindex="0">
                                {/* <div className="row">
                                    <div className="fs-4 fst-italic fw-bold">"{detailPerson.tagline}"</div>
                                </div> */}
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Biography:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailPerson.biography}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Person ID:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailPerson.id}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Birthday :</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailPerson.birthday}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Place Birthday:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailPerson.place_of_birth}</div>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Language:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{detailPerson.original_language}</div>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Profile Url:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6"><a href={detailPerson.homepage} target="blank">{detailPerson.homepage}</a></div>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6">Genre:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6">{Object.values(detailPerson.genres).map((value) => value.name).join(', ')}</div>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div class="tab-pane fade p-3" id="rating-tab-pane" role="tabpanel" aria-labelledby="rating-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-6 fw-bold">Rating:</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="fs-6 fw-bold">{detailPerson.vote_average}/{detailPerson.vote_count} voter</div>
                                    </div>
                                </div>
                            </div> */}
                            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
                        </div>
                    </div>
                </div>
                <div className="container bg-white rounded shadow mb-3">
                    <div className='row p-3'>
                        <div className='fs-4 fw-bold mb-3'>Movie</div>
                        {Object.values(personCreditMovie.cast).filter((value) => value.poster_path !== null).map((value) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-6 mb-3">
                                        <div className="card shadow">
                                            <Link to={`/movie/${value.id}`}>
                                                <img
                                                    src={`${process.env.REACT_APP_IMG_PATH}/${value.poster_path}`}
                                                    className="card-img-top shadow"
                                                    alt={`${value.title}.jpg`}
                                                />
                                                <div className="fs-6 fw-bold">as "{value.character}"</div>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="container bg-white rounded shadow mb-3">
                    <div className='row p-3'>
                        <div className='fs-4 fw-bold mb-3'>TV</div>
                        {Object.values(personCreditTV.cast).filter((value) => value.poster_path !== null).map((value) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-6 mb-3">
                                        <div className="card shadow">
                                            <Link to={`/movie/${value.id}`}>
                                                <img
                                                    src={`${process.env.REACT_APP_IMG_PATH}/${value.poster_path}`}
                                                    className="card-img-top shadow"
                                                    alt={`${value.title}.jpg`}
                                                />
                                                <div className="fs-6 fw-bold">as "{value.character}"</div>
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

export default GetPersonDetail;
