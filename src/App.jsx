import "./App.css";
import Bolos from "./Components/Bolos/Bolos";
import Brigadeiro from "./Components/Brigadeiro/Brigadeiro";
import Carousel from "./Components/Carousel/Carousel";
import Contatos from "./Components/Contatos/Contatos";
import Doces from "./Components/Doces/Doces";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Bolos />
      <Doces />
      <Brigadeiro />
      <Contatos />
    </>
  );
}

export default App;
