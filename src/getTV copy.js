import { useEffect, useState } from "react";
import axios from "axios";

const GetTV = () => {
  const [tv, setTv] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/tv`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        // code below for check data get
        // console.log("datas => ", response.data.results);
        setTv(response.data.results);
      });
  }, []);

  return (
    <div className="container">
      <h3>this is tv by discover</h3>
      <div className="overflow-auto row flex-row flex-nowrap mt-4 pb-4 pt-2">
        {/* <div className="item-rotate "> */}
        {tv.map((results) => {
          return (
            <div className="col-md-6 col-lg-3 mb-3 ">
              <div className="card ">
                <img
                  src={`${process.env.REACT_APP_IMG_PATH}/${results.poster_path}`}
                  className="card-img-top img-sc"
                  alt={`${results.title}.jpg`}
                />
              </div>
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default GetTV;
