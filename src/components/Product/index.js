import "./style.css";

export default function Product({ element, handleClick, signal }) {
  // function comma(value) {
  //   let string = value.toFixed(2).toString().replace(".", ",");
  //   return string;
  // }
  return (
    <div>
      <p>{element.name}</p>
      <p className="pCategory">Seção {element.category}</p>
      <p className="pPrice">R${element.price}</p>
      <button onClick={() => handleClick(element.id)}>{signal}</button>
    </div>
  );
}
