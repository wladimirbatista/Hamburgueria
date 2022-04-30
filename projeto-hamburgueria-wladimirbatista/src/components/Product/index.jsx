import "./style.css"

const Product = ({filterProduct, products, handleClick}) => {

  return(
    <>
      {filterProduct.length === 0 ? 
        products.map((product) =>
          <li className="card-product" key={product.id}>
            <figure>
              <img src={product.img}/>
            </figure>
            <div>
              <h3>{product.name}</h3>
              <small>{product.category}</small>
              <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(product.price)}</p>
              <button onClick={() => handleClick(product)}>Adicionar</button>
            </div>
          </li>
        ) 
        :
        filterProduct.map((product) =>
          <li className="card-product" key={product.id}>
            <figure>
              <img src={product.img}/>
            </figure>
            <div>
              <h3>{product.name}</h3>
              <small>{product.category}</small>
              <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(product.price)}</p>
              <button onClick={() => handleClick(product)}>Adicionar</button>
            </div>
          </li>
        )
      }
    </>
  )
}

export default Product;