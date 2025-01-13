export default function ProductsList({children}) {
  return (
    <div className="space-y-5 w-full">
      <h3 className="font-bold w-full text-center">Lista de Produtos</h3>
      <ul className="flex overflow-y-auto flex-wrap max-h-[80%]" id="product-list">
        {children}
      </ul>
    </div>
  );
}
