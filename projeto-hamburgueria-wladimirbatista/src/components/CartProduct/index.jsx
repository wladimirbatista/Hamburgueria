import "./style.css"

const CartProduct = ({product, removeProduct}) => {

  return(
    <li className="CartProduct">
      <figure>
        <img src={product.img}/>
      </figure>
      <div>
        <h4>{product.name}</h4>
        <small>{product.category}</small>
      </div>
      <button onClick={() => removeProduct(product)}>Remover</button>
    </li>
  )
}

export default CartProduct;