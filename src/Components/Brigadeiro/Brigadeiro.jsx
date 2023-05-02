import "./Brigadeiro.scss";

const Brigadeiro = () => {
  return (
    <>
      <h2 id="brigadeiro">Brigadeiro</h2>
      <section className="brigadeiro">
        <div className="brigadeiro-decricao">
          <p>
            Experimente o sabor delicioso e inesquecível do nosso brigadeiro!
            Feito com ingredientes selecionados e uma receita tradicional, nosso
            brigadeiro é simplesmente irresistível. Cada mordida oferece uma
            experiência indulgente, com um sabor rico e cremoso de chocolate que
            derrete na boca. Perfeito para satisfazer a vontade de doces ou como
            uma sobremesa especial, nosso brigadeiro é um doce que agrada a
            todos os gostos. Com uma variedade de opções de apresentação, desde
            bolinhas decoradas até potes de creme, nosso brigadeiro é uma
            escolha perfeita para festas de aniversário, casamentos e outras
            celebrações. Experimente agora e descubra por que nosso brigadeiro é
            o favorito de tantos amantes de doces.
          </p>
        </div>
        <table className="table-Brigadeiro">
          <thead>
            <tr>
              <th>Sabor</th>
              <th>Unidades</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brigadeiro</td>
              <td>50 Uni</td>
              <td>R$40</td>
            </tr>
            <tr>
              <td>Beijinho</td>
              <td>50 Uni</td>
              <td>R$40</td>
            </tr>
            <tr>
              <td>Moranguinho</td>
              <td>50 Uni</td>
              <td>R$40</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Brigadeiro;
