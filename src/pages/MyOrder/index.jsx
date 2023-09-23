import { useContext } from "react";
import { Link } from "react-router-dom"
import Layout from "../../components/Layout"
import { ShoppingCartContext } from "../../context";
import OrderCard from "../../components/OrderCard";
import { HiArrowSmLeft } from "react-icons/hi";

function MyOrder() {

    const context  = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
    if (index === "last") index = context.order?.length - 1

    return (
        <>
            <Layout>
            <div className="flex items-center justify-center w-80 mb-6 relative">
                    <Link 
                        className = "absolute left-0 "
                        to = "/my-orders"
                    >
                        <HiArrowSmLeft
                        />
                    </Link>
                    <h1>My Order</h1>

                </div>

                <div className="flex-1 ">
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard 
                            key = {product.id}
                            id = {product.id}
                            title = {product.title}
                            imageUrl = {product.images}
                            price = {product.price}
                        />

                    ))
                }
            </div>

            </Layout>
        </>
    )
}

export default MyOrder
