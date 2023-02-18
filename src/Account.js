import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Account = () => {
    const [accountDetail, setAccountDetail] = useState(null);

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
            });
    }, []);

    console.log(accountDetail);

    if (accountDetail === null) {
        return null
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <img
                        src={`${process.env.REACT_APP_IMG_PATH}/${accountDetail.avatar.tmdb.avatar_path}`}
                        className="card-img-top h-75 w-75 rounded-circle"
                        alt={`${accountDetail.username}.jpg`}
                    />
                </div>
                <div className='col-9'>
                    <div className="fs-1">{accountDetail.username}</div>
                    <div className="fs-5">ID: {accountDetail.id}</div>
                </div>
            </div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
            </div>
        </div>
    );
}

export default Account;
