import { Trash2, Pencil, ChevronRight } from 'lucide-react';

export default function Product(props) {
  const { name, price, description, isAvailable, productId} = props;

  return (
    <li key={productId} className="flex  flex-row justify-between mt-1 w-full py-2 px-2 bg-[#ced8e3] rounded-md sm:text-sm">
      <span className='flex flex-row items-center'>
        <ChevronRight size={22}/>
        <h3>{name}</h3>
      </span>
      <span className='flex flex-row items-center justify-between flex-start w-[130px]'>
        <span className='mr-3 font-semibold'>R$ {price}</span>
        <span className='flex flex-row w-[40px] justify-between'>
            <Pencil size={18}/>
            <Trash2 size={18}/>
        </span>
      </span>
    </li>
  );
}
