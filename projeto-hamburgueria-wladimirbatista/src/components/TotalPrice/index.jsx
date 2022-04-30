import "./style.css"

const TotalPrice = ({currentSale, removeAllProducts}) => {

  const totalPrice = currentSale.reduce((acumulador, valorAtual) => acumulador + valorAtual.price, 0)

  return(
    <div className="cart-totalPrice">
      <div>
        <p>Total</p>
        <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(totalPrice)}</span>
      </div>
      <button onClick={() => removeAllProducts(currentSale)}>Remover Todos</button>
    </div>
  )
}

export default TotalPrice;