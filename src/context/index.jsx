import { createContext, useState, useEffect } from "react";


export const ShoppingCartContext = createContext() 

// Guardando datos en el local Storage de "account y Sing-out"

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem("account")
    const signOutInLocalStorage = localStorage.getItem("sign-out")
    let parsedAccount
    let parsedSignOut

    if (!accountInLocalStorage) {
        localStorage.setItem( "account", JSON.stringify({}) )
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if (!signOutInLocalStorage) {
        localStorage.setItem("sign-out", JSON.stringify(false))
        parsedSignOut = false
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCartProvides = ({ children }) => {

    // My account
    const [account, setAccount] = useState({})

  // Sign out
    const [signOut, setSignOut] = useState(false)

    //  Se agrega la cantidad al carrito

    const [counter, setCounter] = useState(0)

    // Se abren y se cierra el "PRODUCT DETAIL"

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Se abren y se cierra el "Checkout Side Menu"

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Se muetran los productos en el "PRODUCT DETAIL"

    const [productToShow, setProductToShow] = useState({})

    //  Se agregan los productos en el "Shopping Cart"

    const [cartProducts, setcartProducts] = useState([])
    
    // se agregan los productos del "Shopping Cart" a Order

    const [order, setOrder] = useState([])

    // Get products

    const [products, setProducts] = useState(null)


    const [filterProducts, setFilterProducts] = useState(null)


    // Buscar producto por titulo
    const [searchByTitle, setSearchByTitle] = useState("")

    const Search = (event) => {
        setSearchByTitle(event.target.value)
    }

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [] )

    const filteredProductsByTitle = (products, searchByTitle) => {
        return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()) )
    }

    // Buscar producto por Categoria
    const [searchByCategory, setSearchByCategory] = useState("")

    const filteredProductsByCategory = (products, searchByCategory) => {
        return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()) )
    }

    const filterBy = (searchType, products, searchByTitle, searchByCategory) => {

        if (searchType === "BY_TITLE") {
            return filteredProductsByTitle(products, searchByTitle)
        
        }
        if (searchType === "BY_CATEGORY") {
            return filteredProductsByCategory(products, searchByCategory)

        }
        if (searchType === "BY_TITLE_AND_CATEGORY") {
            return filteredProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()) )

        }if (!searchType) {
            return products
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilterProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilterProducts(filterBy('BY_TITLE', products, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilterProducts(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilterProducts(filterBy(null, products, searchByTitle, searchByCategory))
    }, [products, searchByTitle, searchByCategory])
    


    return (
        <ShoppingCartContext.Provider 
            value = {{
                counter,
                setCounter,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setcartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                products,
                setProducts,
                filterProducts,
                setFilterProducts,
                searchByTitle,
                setSearchByTitle,
                Search,
                searchByCategory,
                setSearchByCategory,
                account,
                setAccount,
                signOut,
                setSignOut
            }}
        >
            { children }

        </ShoppingCartContext.Provider>
    )
}
