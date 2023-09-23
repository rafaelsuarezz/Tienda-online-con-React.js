import React, { useState } from 'react';
import { HiOutlineX } from "react-icons/hi";


const OrderCard = ({id, title, imageUrl, price, deleteProduct  }) => {

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(price);

    const handleOnChange = (event) => {
        setQuantity(event.target.value);
        setTotal(price * event.target.value);
        
    }

    let renderHiOutlineX 
    if (deleteProduct) {
        renderHiOutlineX = 
            <button >
                <HiOutlineX
                    onClick={() => deleteProduct(id)}
                />
            </button>
    }
    

    return (
        <div className = "flex justify-between items-center mb-2 px-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]" >

            <div className = "flex items-center gap-2">
                <figure className = "w-20 h-20">
                    <img className = "w-full h-full rounded-lg object-cover" src = { imageUrl } alt = { title } />
                </figure>
            </div>

            <div className = "flex flex-col justify-center pl-2" >
                <p className = "text-sm font-light"> { title } </p>

                <div className = "flex items-center gap-2 ">
                    <label className = "text-sm font-thin" htmlFor = "quantity" >
                        Qty
                    </label>
                        <input 
                            className = "w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-md focus:outline-none focus:border-blue-500" type = "number"  
                            name = "quantity"
                            value = { quantity }
                            onChange = { (e) => handleOnChange(e) }
                        />
                </div>

            </div>

            <div className = "flex items-center gap-2">

                <p className = "text-lg font-medium">{ total }</p>

                {renderHiOutlineX}

            </div>

        </div>
    )
}

export default OrderCard