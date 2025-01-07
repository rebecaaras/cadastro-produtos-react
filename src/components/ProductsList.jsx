import Product from "./Product";

export default function ProductsList() {
    return (
        <div className="space-y-5 w-[80vw] h-96">
            <h3 className="font-bold w-full text-center">Lista de Produtos</h3>
            <ul>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </ul>
            
        </div>
    )
}