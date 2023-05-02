import "./Navbar.scss";

import logo from "./src/assets/Silvinha.jpg"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navegacao">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="logoImg" />
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
              <a className="nav-link " href="#bolo">
                Bolos
              </a>
              <a className="nav-link" href="#doce">
                Doçes
              </a>
              <a className="nav-link" href="#brigadeiro">
                Brigadeiros
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
