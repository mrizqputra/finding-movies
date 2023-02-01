import { Link } from "react-router-dom";

function Navbar() {
  const renderLoginLogout = () => {
    const userName = localStorage.getItem('userName');

    if (localStorage.getItem("sessionID") || localStorage.getItem("userName")) {
      const handleLogout = () => {
        // TODO: jangan lupa delete session movieDBnya juga
        localStorage.removeItem("sessionID");
        localStorage.removeItem("userName");
        window.location.href = "/";
      };
      return (
        <>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Profile
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">{userName}</a></li>
            <li><hr class="dropdown-divider"/></li>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li><a class="dropdown-item" onClick={handleLogout}>Logout</a></li>
          </ul>
        </li>
        </>
      );
    }
    return (
      <li className="nav-item">
        <Link to="/login">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="nav-link">Login</a>
        </Link>
      </li>
    );
  };
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
              <Link to="/">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link">Home</a>
              </Link>
            </li>
            {renderLoginLogout()}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;