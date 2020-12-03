import React from "react";
import { Products, Navbar } from "./components";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
