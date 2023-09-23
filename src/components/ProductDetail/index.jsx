import { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import { ShoppingCartContext } from "../../context";
import "./style.css"

const ProductDetail = () => {
    const context  = useContext(ShoppingCartContext)

    return (
        <aside 
            className = {`
                ${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white
            `}
        >

            <div className = "flex justify-between items-center p-6">
                
                <h2 className = "font-medium text-xl">
                    Detail
                </h2>

                <button 
                    onClick={ () => context.closeProductDetail() }
                > 
                    <HiOutlineX /> 
                </button>
            </div>

            <figure className="px-6">
                <img 
                    className = "w-full h-full rounded-lg"
                    src={context.productToShow.images ? context.productToShow.images[0]: ''} 
                    alt={context.productToShow.title} 
                />
            </figure>
            <p
                className="flex flex-col p-6"
            >
                <span className="font-medium text-2xl mb-2"> 
                    Price ${context.productToShow.price} 
                </span>
                <span className="font-medium text-md mb-2"> 
                    {context.productToShow.title} 
                </span>
                <span className="font-light text-sm"> 
                    {context.productToShow.description} 
                </span>
            </p>
        </aside>
    )
}

export default ProductDetail