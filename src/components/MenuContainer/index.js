import Product from "../Product";

export default function MenuContainer({
  products,
  filteredProducts,
  currentSale,
  setCurrentSale,
  handleClick,
}) {
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li className="listaMenu" key={item.id}>
            <Product element={item} handleClick={handleClick} signal={"+"} />
          </li>
        ))}
      </ul>
    </div>
  );
}
