
import { PiShoppingBagFill } from "react-icons/pi";
import {sales} from "../datas"

const FirstValue = () => {
  return (
    <div className='flex h-full w-full justify-center items-center '>
        <div className='p-2 bg-yellow-50 rounded-md'>
        <PiShoppingBagFill  size={20}/>
        </div>
        <div className='flex flex-col items-start justify-center ml-1'>
            {sales.map(data=>(<span key={1} className='leading-6 text-xl  font-medium'>{data.amount}</span>))}
            {sales.map(data=>(<span key={2} className='leading-3 text-sm font-light'>{data.value}</span>))}
        </div>
    </div>
  )
}

export default FirstValue