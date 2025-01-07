import Product from "./Product";

export default function ProductsList() {
  return (
    <div className="space-y-5 w-[80vw] h-96">
      <h3 className="font-bold w-full text-center">Lista de Produtos</h3>
      <ul className="flex overflow-y-auto flex-wrap max-h-[80%]">
        <Product
          name="Bolo de laranja"
          price="10"
          description=""
          isAvailable="true"
        />
        <Product
          name="Café expresso"
          price="2"
          description=""
          isAvailable="true"
        />
        <Product
          name="Pão de Queijo"
          price="5"
          description=""
          isAvailable="true"
        />
        <Product
          name="Suco de frutas - diversos sabores"
          price="4"
          description="Manga, laranja, acerola, cajá, limão"
          isAvailable="true"
        />
        <Product
          name="Bolo de laranja"
          price="10"
          description=""
          isAvailable="true"
        />
        <Product
          name="Café expresso"
          price="2"
          description=""
          isAvailable="true"
        />
        <Product
          name="Pão de Queijo"
          price="5"
          description=""
          isAvailable="true"
        />
        <Product
          name="Suco de frutas - diversos sabores"
          price="4"
          description="Manga, laranja, acerola, cajá, limão"
          isAvailable="true"
        />
        
      </ul>
    </div>
  );
}
