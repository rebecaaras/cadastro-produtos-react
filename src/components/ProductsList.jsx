import Product from "./Product";
import { ArrowUpDown } from "lucide-react";

export default function ProductsList(props) {
  const { products, setProducts } = props;

  const sortProducts = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts([...products]);
  };

  return (
    <div className="w-full">
      {products.length > 0 ? (
        <div>
          <h3 className="font-bold w-full text-center">Lista de Produtos</h3>
          <div className="flex justify-end mb-2 mr-[5px]">
            {/* Botão de ordenar lista */}
            <button
              className="flex justify-center w-[145px] p-[2px] py-[2px] rounded-md bg-[#ced8e3] border-[2px] border-[#ced8e3] hover:border-slate-700 hover:bg-slate-100 text-sm"
              onClick={sortProducts}
            >
              <ArrowUpDown size={14} />
            </button>
          </div>
          <ul
            className="flex overflow-y-auto flex-wrap max-h-[390px]"
            id="product-list"
          >
            {/* Novos produtos serão adicionados aqui */}
            {products.map((product) => (
              <Product
                name={product.name}
                price={product.price}
                description={product.description}
                isAvailable={product.isAvailable}
              />
            ))}
          </ul>
        </div>
      ) : (
        <p className="h-full w-full text-center mt-[160px]">
          Não há produtos cadastrados...
        </p>
      )}
    </div>
  );
}
