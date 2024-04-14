
import Product from "./Product.jsx";
import Button from "./Button.jsx";
function printBye(){
  console.log("Bye");
}
function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
    let styles = {
      display : "flex",
      flesWrap: "wrap",
      justifyContent: "center",
      alignItems : "center"
    }
    return (
      <div style={styles} onMouseOver={printBye}>
        <Product title="Logitech MX MAster" idx={0}/>
        <Product title="Apple pencil (2nd Gen)" idx={1} />
        <Product title="Zebronics Zeb-Tranformer"  idx={2} />
        <Product title="Petromics Toad 23"  idx={3} />
        <Button/>
      </div>
    );
  }
export default ProductTab;