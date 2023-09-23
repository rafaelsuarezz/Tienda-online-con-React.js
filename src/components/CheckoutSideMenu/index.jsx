import { useContext  } from "react";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../OrderCard";
import "./style.css"





const CheckoutSideMenu = () => {

    const context  = useContext(ShoppingCartContext)
    
    


    // Función para calcular el precio total
    const TotalPrice = () => {
        return context.cartProducts.reduce((total, product) => total + product.price, 0);
    };
    
    const deleteProduct = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setcartProducts(filteredProducts)
        context.setCounter(context.counter - 1)
    }

    const handleCheckout = () => {

        const orderToAdd = {
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            finalPrice: TotalPrice(),
        }

    
        context.setOrder([...context.order, orderToAdd])
        context.setcartProducts([])
        context.setCounter(0)

        context.closeCheckoutSideMenu()
        context.setSearchByTitle("")
    }


    return (
        
        <aside 
            className = {`
                ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white
            `}
        >
            <div className = "flex justify-between items-center p-6">
                
                <h2 className = "font-medium text-xl">
                    My order
                </h2>

                <button 
                    onClick={ () => context.closeCheckoutSideMenu() }
                > 
                    <HiOutlineX /> 
                </button>
            </div>

            <div className="flex-1 ">
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key = {product.id}
                            id = {product.id}
                            title = {product.title}
                            imageUrl = {product.images}
                            price = {product.price}
                            deleteProduct = {deleteProduct}
                        />

                    ))
                }
            </div>

            <div className = "px-6 mb-2 mt-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <p className = "flex justify-between items-center mb-2">
                    <span className = "font-medium text-xl">Total: </span>
                    <span className = "font-medium text-2xl">$ {TotalPrice()}</span>
                </p>

                <Link to = "/my-orders/last" >
                    <button 
                        className = "w-full py-3 rounded-lg font-medium bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100"
                        onClick={() => handleCheckout() }
                    >
                        Checkout
                    </button>
                </Link>

            </div>

        </aside>
    )
}

export default CheckoutSideMenu