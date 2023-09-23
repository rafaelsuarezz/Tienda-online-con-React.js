import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { HiOutlineShoppingCart,  } from "react-icons/hi";

const NavBar = () => {

    const context  = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"

    return (
        <nav className = "flex justify-between items-center fixed z-10 top-0 w-full py-3 px-3 text-sm bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
            
            {/* NAV-BAR LEFT */}

            <ul className = "flex items-center gap-3">

                <li className = "font-semibold text-lg">
                    <NavLink
                        to = "/"
                    >
                        Lagoa Store
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to = "/"
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to = "/clothes"
                        onClick={() => context.setSearchByCategory("clothes")}
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to = "/electronics"
                        onClick={() => context.setSearchByCategory("electronics")}
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to = "/furnitures"
                        onClick={() => context.setSearchByCategory("furnitures")}
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to = "/shoes"
                        onClick={() => context.setSearchByCategory("shoes")}

                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Shoes
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to = "/others"
                        onClick={() => context.setSearchByCategory("others")}

                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>

            </ul>

            {/* NAV-BAR RIGT */}

            <ul className = "flex items-center gap-3">

                <li>
                    <NavLink
                        to = "/my-orders"
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                    My Orders
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to = "/my-account"
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Account
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to = "/sing-in"
                        className = {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        SingIn
                    </NavLink>
                </li>

                <li className = "flex items-center">
                    <HiOutlineShoppingCart /> {context.counter}
                </li>

            </ul>

        </nav>
    )
}

export default NavBar
