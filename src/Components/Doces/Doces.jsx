import "./Doces.scss";

const Doces = () => {
  return (
    <>
      <h2 id="doce">Doçes</h2>
      <section className="doces">
        <div className="doces-decricao">
          <p>
            Os doces deliciosos e diversificados são uma tentação irresistível
            para os amantes de sobremesas. Eles vêm em uma ampla variedade de
            sabores, texturas e formatos, e oferecem uma experiência de sabor
            única e satisfatória.
          </p>
        </div>
        <table className="table-doces">
          <thead>
            <tr>
              <th>Doçes</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bolo de Pote</td>
              <td>R$40</td>
            </tr>
            <tr>
              <td>Pão de Mel</td>
              <td>R$40</td>
            </tr>
            <tr>
              <td>Torta</td>
              <td>R$40</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Doces;
