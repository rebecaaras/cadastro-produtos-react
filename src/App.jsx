import Form from "./components/Form";
import Product from "./components/Product";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [isAvailable, setIsAvailable] = useState("sim");
  const [products, setProducts] = useState([]);

  // Carregar produtos do localStorage ao iniciar
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts)); // Carrega produtos se existirem
    }
  }, []);

  // Atualizar o localStorage sempre que os produtos mudarem
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products)); // Salva produtos no localStorage
    }
  }, [products]);

  const addNewProduct = (e) => {
    e.preventDefault(); //previne que a página recarregue quando o form é enviado

    if (!name || !description || !price) {
      alert("Preencha as informações do produto para poder cadastrá-lo!");
      return;
    }

    //Create a new product
    const newProduct = {
      name,
      description,
      price,
      isAvailable,
    };

    //Update the products list
    setProducts([...products, newProduct]);
    //Clear the form
    setName("");
    setDescription("");
    setPrice("");
    setIsAvailable("sim");

    console.log("Novo produto cadastrado!");
  };

  return (
    <main className="px-20 bg-[#000d0d] min-h-screen text-slate-300 flex items-center justify-center">
      <div className="flex flex-row border-slate-300 border-[2px] rounded-[12px] w-full h-96">
        {/* Tela da esquerda */}
        <div className="w-2/5 flex justify-center justify-start p-4">
          <Form>
            <input
              type="text"
              id="product-name"
              name="product-name"
              required
              className="mt-1 w-full py-2 px-2 bg-[#002828] rounded-md sm:text-sm"
              placeholder="Nome do produto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              id="product-description"
              name="product-description"
              required
              className="mt-1 w-full py-2 px-2 bg-[#002828] rounded-md sm:text-sm"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                R$
              </span>
              <input
                type="number"
                id="product-price"
                name="product-price"
                step="0.01"
                min="0"
                placeholder="0.00"
                required
                className="pl-10 block w-full bg-[#002828] px-4 py-2 rounded-md sm:text-sm"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <span>O produto está disponível?</span>
              <div className="flex flex-row items-center justify-between w-1/2 py-2">
                <label
                  htmlFor="available"
                  className="flex items-center space-x-2"
                >
                  <input
                    type="radio"
                    id="available"
                    name="availability"
                    value="sim"
                    onChange={(e) => setIsAvailable(e.target.value)}
                    required
                    checked
                    className="w-4 h-4 border-gray-300 focus:ring-green-500 focus:ring-2"
                  />
                  <span className="text-sm">Sim</span>
                </label>
                <label
                  htmlFor="available"
                  className="flex items-center space-x-2"
                >
                  <input
                    type="radio"
                    id="unavailable"
                    name="availability"
                    value="não"
                    onChange={(e) => setIsAvailable(e.target.value)}
                    required
                    className="w-4 h-4 border-gray-300 focus:ring-green-500 focus:ring-2"
                  />
                  <span className="text-sm">Não</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              onClick={addNewProduct}
              className="w-full border-[1px] hover:bg-slate-500 hover:text-[#000d0d] py-2 px-4 rounded-md"
            >
              Cadastrar
            </button>
          </Form>
        </div>
        {/* Tela da direita */}
        <div className="w-3/5 flex p-4 rounded-[10px] bg-slate-200 text-slate-900">
          <ProductsList products = {products} setProducts = {setProducts}/>
        </div>
      </div>
    </main>
  );
}

export default App;
