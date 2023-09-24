import { useContext } from "react";
import { HiPlusSm, HiCheck } from "react-icons/hi";
import { ShoppingCartContext } from "../../context";

const Card = (data) => {

    const context  = useContext(ShoppingCartContext)

    const showProduct = (ProductDetail) => {
        context.openProductDetail()
        context.closeCheckoutSideMenu()
        context.setProductToShow(ProductDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCounter(context.counter + 1)
        context.setcartProducts([...context.cartProducts, productData])

        context.openCheckoutSideMenu()
        context.closeProductDetail()

    }

    // transformacion de boton + en la card

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {

            return (
                <button 
                    className = "absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 bg-purple-200 " 
                >
                    <HiCheck />
                </button>
        )

        } else {
            return (
                <button 
                    className = "absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2  hover:bg-purple-200 "
                    onClick = { (event) => addProductsToCart(event, data.data) }
                >
                    <HiPlusSm />
                </button>
            )
        }
    }

    return (

        <div 
            className = "bg-white cursor-pointer w-56 h-60 rounded-lg shadow-xl " 
            onClick = {() => showProduct(data.data)}
        >

            <figure className = "relative mb-2 w-full h-4/5" >

                <span className = "absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5 " >
                    {data.data.category.name}
                </span>

                <img className = "w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />

                { renderIcon(data.data.id) }

            </figure>
            
            <p className = "flex justify-between items-center p-1">

                <span className = "text-sm font-light" >
                    {data.data.title}
                </span>
                <span className = "text-lg font-medium" >
                    {data.data.price}
                </span>
                
            </p>

        </div>
    )
}

export default Card
