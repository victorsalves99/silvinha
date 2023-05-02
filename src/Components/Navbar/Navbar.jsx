import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navegacao">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img src="./src/assets/Silvinha.jpg" alt="" className="logoImg" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-end flex-row-reverse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link " href="#">
                Bolos
              </a>
              <a className="nav-link" href="#">
                Doçes
              </a>
              <a className="nav-link" href="#">
                Brigadeiros
              </a>
              <a className="nav-link " href="#">Contatos</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
