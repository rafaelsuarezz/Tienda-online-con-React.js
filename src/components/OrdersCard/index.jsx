import React from 'react';
import { dateTime } from '../utils/dateTime';
import { GiShoppingCart } from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi";
import { BsCalendar2 } from "react-icons/bs";


const OrdersCard = ({ finalPrice, totalProducts }) => {

    // const [quantity, setQuantity] = useState(1);
    // const [total, setTotal] = useState(price);

    // const handleOnChange = (event) => {
    //     setQuantity(event.target.value);
    //     setTotal(price * event.target.value);
        
    // }



    return (
        <div className = "flex justify-between w-96 h-26 items-center mb-2 p-4 border border-black rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]" >

            <div className = "flex justify-between w-full">

                <div className = "flex  flex-col">
                
                        <span className = "flex items-center font-light gap-2">
                            <BsCalendar2/>
                            {dateTime()}
                        </span>
                        <span className = "flex items-center font-medium text-xl" >{totalProducts} <GiShoppingCart/> </span>

                </div>

                <div className='flex items-center gap-2'>
                    <span  className = "font-medium text-2xl" >${finalPrice}</span>
                    <HiArrowRight />
                </div>

            </div>

        </div>
    )
}

export default OrdersCard