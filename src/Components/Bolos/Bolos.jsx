import "./Bolos.scss";

const Bolos = () => {
  return (
    <>
      <h2 id="bolo">Bolos</h2>
      <section className="container bolos">
        <div className="container-fluid bolo-descricao">
          <p>
            Os bolos que têm o melhor do chocolate e são irresistivelmente
            deliciosos, com um sabor rico e intenso de cacau que satisfaz
            qualquer amante de chocolate.Com camadas suaves e fofas de bolo de
            chocolate, cobertas com um glacê de chocolate cremoso e decorados
            com raspas de chocolate ou pedaços de chocolate derretido.Recheios
            de ganache de chocolate, creme de chocolate ou pedaços de chocolate
            em seu interior, adicionando ainda mais textura e sabor à
            experiência. Para os verdadeiros amantes de chocolate, não há nada
            melhor do que um bolo que oferece o melhor do chocolate em cada
            mordida.
          </p>
        </div>
        <table className="table-bolo">
          <thead>
            <tr>
              <th scope="col">Sabor</th>
              <th scope="col">Kg</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Morrango</td>
              <td>1kg</td>
              <td>R$40</td>
            </tr>
            <tr>
              <td>Chocolate</td>
              <td>1kg</td>
              <td>R$40</td>
            </tr>
            <tr>
              <td>Chocolate Branco</td>
              <td>1kg</td>
              <td>R$40</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Bolos;
