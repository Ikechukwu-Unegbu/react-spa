import { Link } from "react-router-dom";

const Product = () =>{
  return (
  <section>
    <h1>The Product page.</h1>  
    <ul>
      <li><Link to="/product/:1">Book 1</Link> </li>
      <li><Link to="/product/:2">Carpet 2</Link></li>
      <li><Link to="/product/:3">An Online Course 3 </Link></li>
    </ul>
  </section>);
}

export default Product;