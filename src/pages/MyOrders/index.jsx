import { useContext } from "react"
import Layout from "../../components/Layout"
import OrdersCard from "../../components/OrdersCard"
import { ShoppingCartContext } from "../../context"
import { Link } from "react-router-dom"

function MyOrders() {

    const context  = useContext(ShoppingCartContext)

    return (
        <>
            <Layout>
                <h1 className = "font-medium text-xl mb-2" >My Orders</h1>
                
                <div className="flex flex-col">
                    {
                        context.order.map((order, index) => (

                            <Link 
                                to = {`/my-orders/${index}`} 
                                key={index}
                            >
                                <OrdersCard
                                    finalPrice={order.finalPrice}
                                    totalProducts={order.totalProducts}
                                />
                            </Link>
                        ))
                    }
                </div>
            </Layout>
        </>
    )
}

export default MyOrders
