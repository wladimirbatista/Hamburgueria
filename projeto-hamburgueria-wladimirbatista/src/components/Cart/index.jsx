import "./style.css"
import CartProduct from "../CartProduct";
import TotalPrice from "../TotalPrice";

const Cart = ({currentSale, removeProduct, removeAllProducts}) => {

  return(
    <aside className="cart-box">
      <div className="cart-header">Carrinho de compras</div>
      {currentSale.length <= 0 ? (
        <div className="cart-footer">
          <h3>Sua sacola está vazia</h3>
          <small>Adicione Itens</small>
        </div>
        ) : (
        <div>
          <ul className="list-cart">
            {currentSale.map((product, index) => <CartProduct key={index} product={product} removeProduct={removeProduct}/>)}
          </ul>
          <TotalPrice currentSale={currentSale} removeAllProducts={removeAllProducts}/>
        </div>
        )
      }
    </aside>
  )
}

export default Cart;