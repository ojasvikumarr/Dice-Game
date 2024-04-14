import "./Product.css";
import Price from "./Price.jsx";
function Product({ title = "Objecct", idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "299"];
  let Description = [
    ["8,000 DPI", "5 Programmbale Features"],
    ["intuitive surface", "designed for Ipad Pro "],
    ["designed for ipad pro","Optical Orientation"],
    ["wireless","intuitive surface"]
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{Description[idx][0]}</p>
      <p>{Description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;

// map function applie changes to each elemnt of the array

// let styles = {backgroundColor: price > 2000 ? "pink" : "black"};
// let isDiscount = price >= 3000 ? "Discount of 5% is applied" : "No discount";

{
  /* <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <p>{features.map((feature) => <li>{feature}</li>)}</p>
            <p>{isDiscount}</p>
            {price <= 1000 ? <p>less than 1000</p> : null}
            {(price > 1000 && price < 3000) && <p>Greater than 1000</p>} */
}
