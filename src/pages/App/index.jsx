import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingCartProvides } from "../../context"
import MyAccount from "../MyAccount"
import Home from "../home"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SingIn from "../SingIn"
import NavBar from "../../components/NavBar"
import './App.css'
import CheckoutSideMenu from "../../components/CheckoutSideMenu"



const AppRoutes = () => {

  let routes = useRoutes([
    { path:"/", element: <Home /> },
    { path:"/clothes", element: <Home /> },
    { path:"/electronics", element: <Home /> },
    { path:"/furnitures", element: <Home /> },
    { path:"/shoes", element: <Home /> },
    { path:"/others", element: <Home /> },
    { path:"/my-account", element: <MyAccount /> },
    { path:"/my-order", element: <MyOrder /> },
    { path:"/my-orders", element: <MyOrders /> },
    { path:"/my-orders/last", element: <MyOrder /> },
    { path:"/my-orders/:id", element: <MyOrder /> },
    { path:"/sing-in", element: <SingIn /> },
    { path:"/*", element: <NotFound /> },
  ])
  
  return routes
}

const App = ()  => {

  return (
    <ShoppingCartProvides>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvides>
  )
}

export default App