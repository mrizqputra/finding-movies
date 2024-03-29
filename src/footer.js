import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid footer text-center">
      <div className="row grid">
        <div className="col-12 col-sm-6 col-md-4 mb-2">
          Movie App Library
          <br />
          API by <a className='tD_none' href='https://www.themoviedb.org/' target='_blank' rel="noreferrer">themoviedb.org</a>
        </div>
        <br />
        <div className="col-12 col-sm-6 col-md-4 mb-2">
          <Link to="#" className="tD_none">About Us</Link>
          <br />
          <Link to="#" className="tD_none">Contact Us</Link>
          <br />
          <Link to="#" className="tD_none">Disclaimer</Link>
        </div>
        <br />
        <div className="col-12 col-sm-6 col-md-4 feedback_marginTop">
          feedback
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Ketikan Feedbackmu" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onclick="feedBack();">
              Kirim
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col copyright_marginTop">
          Copyright &copy; 2022 mrizqputra
        </div>
      </div>
    </div>
  )
}

export default Footer;