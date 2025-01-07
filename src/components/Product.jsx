export default function Product(props){
    const {name, price, description, isAvailable} = props
    return(
        <div className="flex  flex-row justify-between mt-1 w-full py-2 px-2 bg-[#ced8e3] rounded-md sm:text-sm">
            <h3>{name}</h3>
            <span>R$ {price}</span>
        </div>
    )
}