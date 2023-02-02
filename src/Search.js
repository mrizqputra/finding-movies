import { useState } from "react";
import axios from "axios";
import { useFormik, TextField } from "formik";
import * as Yup from "yup";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);

  const formik = useFormik({
    initialValues: {
      query: "",
    },
    validationSchema: Yup.string({
      query: Yup.string()
      // .required("Required")
    }),
    onSubmit: (values) => {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/search/multi`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
            query: `${values.search}`,
          },
        })
        .then((response) => {
          // code below for check data get
          console.log("datas => ", response);
          setSearchResult(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  console.log(searchResult);

  return (
    <>
      <div className="container mb-3">
        <form onSubmit={formik.handleSubmit}>
          <div class="mb-3">
            <label htmlFor="inputsearch" class="form-label">
              Search Movie
            </label>
            <TextField
              type="text"
              class="form-control"
              id="inputsearch"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.search}
            />
            {formik.touched.search && formik.errors.search ? (
              <div>{formik.errors.search}</div>
            ) : null}
          </div>
          <button type="submit" class="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
