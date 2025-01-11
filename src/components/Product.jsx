import { Trash2, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Product(props) {
  const [collapsed, setCollapsed] = useState(false);
  const { name, price, description, isAvailable, productId} = props;

  return (
    <li id={productId} className="w-full bg-[#ced8e3] mt-1 py-2 px-2 rounded-md sm:text-sm">
      <div className='flex  flex-row justify-between font-semibold'>
        <span className='flex flex-row items-center justify-center hover:cursor-pointer' onClick={() => setCollapsed(!collapsed)}>
          { collapsed ? 
            <ChevronRight size={22}/> :  <ChevronRight size={22} className="rotate-90 text-slate-500"/>
          }
          <h3>{name}</h3>
        </span>
        <div className='flex flex-row items-center justify-between flex-start w-[130px]'>
          <span className='mr-3 font-semibold'>R$ {price}</span>
          <button 
            className='flex justify-center items-center hover:bg-white rounded-sm p-[3px] hover:p-[2px] hover:border-[2px] hover:border-slate-900'
            onClick>
            <Trash2 size={18}/>
          </button>
        </div>
      </div>
      {!collapsed && 
        <div className='h-auto items-center mt-1 pl-4 h-auto text-[0.8rem]'>
          <p>{`Disponibilidade: ${isAvailable}`}</p>
          <p>{`Descrição: ${description}`}</p>
      </div>
      }
    </li>
  );
}
