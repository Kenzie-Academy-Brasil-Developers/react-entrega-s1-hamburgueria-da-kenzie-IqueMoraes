import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import CartProducts from "./components/CartProducts";
import CartCount from "./components/CartCount";

function App() {
  const [products] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
    { id: 8, name: "Brigadeiro", category: "Sobremesas", price: 1.8 },
    { id: 9, name: "Hot-dog de Nutella", category: "Sobremesas", price: 6.9 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [filterString, setFilterString] = useState("");

  function showProducts(searchString) {
    console.log(searchString);
    // const newProducts = products.map((item) => item.category === category);
    const newProducts = products.filter((item) => {
      if (item.name.includes(searchString)) {
        return true;
      }
      if (item.category.includes(searchString)) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProducts([...newProducts]);
  }

  function handleClick(productId) {
    if (currentSale.find((item) => item.id === productId)) {
      return false;
    } else {
      const foundProduct = products.find((item) => item.id === productId);
      setCurrentSale([...currentSale, foundProduct]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Menu</h3>
          <div className="big-box menu">
            {filteredProducts.length > 0 ? (
              <MenuContainer
                products={filteredProducts}
                filteredProducts={filteredProducts}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                handleClick={handleClick}
              />
            ) : (
              <MenuContainer
                products={products}
                filteredProducts={filteredProducts}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                handleClick={handleClick}
              />
            )}
          </div>
        </div>
        <div>
          <h3>Filtro de busca</h3>
          <div className="big-box filtro">
            <div>
              <input
                type="radio"
                value="Sanduíches"
                name="categorias"
                onClick={() => showProducts("Sanduíches")}
              />
              <label>Sanduíches</label>
              <input
                type="radio"
                value="Bebidas"
                name="categorias"
                onClick={() => showProducts("Bebidas")}
              />
              <label>Bebidas</label>
              <input
                type="radio"
                value="Sobremesas"
                name="categorias"
                onClick={() => showProducts("Sobremesas")}
              />
              <label>Sobremesas</label>
              <input
                type="radio"
                value="todos"
                name="categorias"
                onClick={() => showProducts([])}
              />
              <label>Mostrar tudo.</label>
            </div>
            <div>
              <input
                type="text"
                value={filterString}
                onChange={(e) => setFilterString(e.target.value)}
              />
              <button onClick={() => showProducts(filterString)}>
                Filtrar Menu
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3>Carrinho</h3>
          <div className="big-box shopping-list">
            <CartProducts
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              setCartTotal={setCartTotal}
            ></CartProducts>
            <CartCount
              currentSale={currentSale}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
