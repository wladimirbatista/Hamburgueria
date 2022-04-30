import "./style.css"
import imagem from "./../img/logoBurguerKenzie.png"
import { useState } from "react"

const Header = ({showProducts}) => {

  const [filterInput, setFilterInput] = useState([])

  return(
    <header>
      <figure>
        <img src={imagem}/>
      </figure>
      <div className="form-header">
        <input type="text" placeholder="Digitar Pesquisa" onChange={(event) => setFilterInput(event.target.value)}/>
        <button onClick={() => showProducts(filterInput)}>Pesquisar</button>
      </div>
    </header>
  )
}

export default Header;