import "./Carousel.scss"


const Carousel = () => {
  return (
    <>
      <h2 className="titulo">O Melhor do Chocolate</h2>
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carrossel">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="./src/assets/Bolo.jpeg"
              className="d-block w-100 carrossel-img"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="./src/assets/Brigadeiro.jpeg"
              className="d-block w-100 carrossel-img"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="./src/assets/doces.jpeg"
              className="d-block w-100 carrossel-img"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
