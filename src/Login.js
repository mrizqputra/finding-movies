import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

async function generateRequestToken() {
  // async/await
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    })
    return response.data.request_token
  } catch (e) {
    console.error(e)
    return null
  }
}

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        // .min(6, 'Must be 6 characters or more')
        // .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        // .min(8, 'Must be 8 characters or more')
        // .max(20, 'Must be 20 characters or less')
        .required('Required')
      // .matches(
      //   /^.*(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
      //   "Password must contain atleast one letter and one number"
      // ),
    }),
    onSubmit: values => {
      generateRequestToken()
        .then(requestToken => {
          axios({
            method: 'post',
            url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_TMDB_KEY}`,
            data: {
              request_token: requestToken,
              username: values.username,
              password: values.password
            }
          }).then(res => {
            const verifiedRequestToken = res.data.request_token;
            axios({
              method: 'post',
              url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_TMDB_KEY}`,
              data: {
                request_token: verifiedRequestToken
              }
            }).then(resp => {
              const sessionID = resp.data.session_id
              localStorage.setItem('sessionID', sessionID)
              alert('Login Success!')
              window.location.href = '/'
            }).catch(e => {
              console.log(e)
            }).then(resp => {
              const userName = values.username
              localStorage.setItem('userName', userName)
            })
          }).catch(e => {
            alert('Login belum berhasil! cek username dan password')
          })
        });
    },
  });

  useEffect(() => {
    console.log(localStorage.getItem('sessionID'))
  }, [])

  return (
    <>
      <div className='container bg-white shadow-lg rounded p-5 my-5'>
        <div className="fs-2 fw-bold text-center mb-3">Login Form</div>
        <form onSubmit={formik.handleSubmit} className='px-lg-5'>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="input-group mb-3"
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
          <br></br>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="input-group mb-3"
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login;
