import { useContext } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import ProductDetail from "../../components/ProductDetail"
import { ShoppingCartContext } from "../../context"



function Home() {

    const context  = useContext(ShoppingCartContext)

    const renderView = ()  =>{
        
            if(context.filterProducts?.length > 0 ){
                return ( 
                    context.filterProducts?.map(products => {
                        return <Card key= {products.id} data = { products } />
                    }) 
                )
            } else {
                return (
                    <div>No se encontro nada</div>
                )
            }
            
        } 

    return (
        <Layout>
            <div>
                <h1 className = "font-medium text-xl mb-2" >
                    Home
                </h1>
            </div>

            <input 
                className = "rounded-lg border border-black w-80 p-4 mb-4"
                type="text" 
                placeholder="Busca tu producto"
                onChange={context.Search}
            />

            <div className = "grid gap-4 w-full max-w-screen-lg justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                { renderView() }
            </div>
            <ProductDetail />

        </Layout>
    )
}

export default Home
