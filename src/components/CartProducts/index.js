import Product from "../Product";

export default function CartProducts({
  currentSale,
  setCurrentSale,
  setCartTotal,
}) {
  function handleClickOff(productId) {
    const foundProduct = currentSale.find((item) => item.id === productId);
    setCurrentSale(currentSale.splice(0, 1, foundProduct));
  }

  return (
    <>
      <ul>
        {/* itens */}
        {currentSale.map((item) => (
          <li className="listaMenu" key={item.id}>
            <Product element={item} handleClick={handleClickOff} signal={"-"} />
          </li>
        ))}
      </ul>
    </>
  );
}
