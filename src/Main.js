function Main() {
    return (
        <div className="container-fluid">
        <h1>Welcome to Finding Movie</h1>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="u can search by everything" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    );
}

export default Main;