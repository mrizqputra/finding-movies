import { Link } from "react-router-dom";

function Navbar() {
  const renderLoginLogout = () => {
    const userName = localStorage.getItem("userName");

    if (localStorage.getItem("sessionID") || localStorage.getItem("userName")) {
      const handleLogout = () => {
        // TODO: jangan lupa delete session movieDBnya juga
        localStorage.removeItem("sessionID");
        localStorage.removeItem("userName");
        window.location.href = "/";
      };
      return (
        <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                <Link to="/account" className="nav-link">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    &nbsp; {userName}
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleLogout} className="nav-link">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </>
      );
    }
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-md-auto">
      <li className="nav-item ">
        <Link to="/login" className="nav-link">Login
        </Link>
      </li>
      </ul>
      </div>
    );
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to='/' className="navbar-brand">
          Finding Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="text-decoration-none">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movie" className="text-decoration-none">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link">Movie</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tv" className="text-decoration-none">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link ">TV</a>
              </Link>
            </li>
          </ul>
        </div>
        {renderLoginLogout()}
      </div>
    </nav>
  );
}
export default Navbar;
