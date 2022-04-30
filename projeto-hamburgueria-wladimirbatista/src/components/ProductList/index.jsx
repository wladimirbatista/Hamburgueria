import "./style.css"
import Product from "./../Product"

const ProductList = ({filterProduct, products, handleClick}) => {

  return(
    <div>
      <ul className="ProductList-container">
        <Product filterProduct={filterProduct} products={products} handleClick={handleClick}/>
      </ul>
    </div>
  )
}

export default ProductList;