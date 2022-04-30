import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [products, setProducts] = useState([])
  const [filterProduct, setFilterProduct] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
  }, [])

  const showProducts = (filterInput) => {
    const filterArrayProducts = products.filter((product) =>  product.name.toLowerCase().includes(filterInput.toLowerCase()) || product.category.toLowerCase().includes(filterInput.toLowerCase()))
    setFilterProduct(filterArrayProducts)
  }

  const handleClick = (productId) => {
    if(!currentSale.find((product) => product.id === productId.id)){
      setCurrentSale([...currentSale, productId])
    } else {
      toast.warn('Esse produto já foi adicionado no carrinho!')
    }
  }

  const removeProduct = (productId) => {
    setCurrentSale(currentSale.filter((product) => product.id !== productId.id))
  }

  const removeAllProducts = () => {
    setCurrentSale([])
  }

  return (
    <div className="App">
      <Header showProducts={showProducts}/>
      <main>
        <ProductList products={products} filterProduct={filterProduct} handleClick={handleClick}/>
        <Cart currentSale={currentSale} removeProduct={removeProduct} removeAllProducts={removeAllProducts}/>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
}

export default App;
