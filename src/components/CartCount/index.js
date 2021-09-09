export default function CartCount({ currentSale, cartTotal, setCartTotal }) {
  function soma() {
    let valores = currentSale.map((item) => item.price);
    let total = valores.reduce((item1, item2) => {
      let parteTotal = (item1 + item2).toFixed(2);
      return parseFloat(parteTotal);
    }, 0);
    setCartTotal(parseFloat(total));
    return cartTotal;
  }
  return (
    <div>
      <h4>Total do pedido: R${soma()}</h4>
    </div>
  );
}
