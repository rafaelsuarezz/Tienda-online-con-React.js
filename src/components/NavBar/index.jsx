import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { HiOutlineShoppingCart,  } from "react-icons/hi";
import { ShoppingCartContext } from "../../Context";

const NavBar = () => {

    const context  = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"

  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
  }


    const renderView = () => {
        if (isUserSignOut) {
            return (
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) => isActive ? activeStyle : undefined }
                        onClick={() => handleSignOut()}>
                        Sign In
                    </NavLink>
                </li>
            )
        } else {
            return (
                <>
                    <li className='text-black/60'>
                        {parsedAccount.email}
                    </li>
                    <li>
                        <NavLink
                            to='/my-orders'
                            className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/my-account'
                            className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/sign-in'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => handleSignOut()}>
                            Sign out
                        </NavLink>
                    </li>
                </>
            )
            }
        }

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

                {renderView()}

                <li className = "flex items-center">
                    <HiOutlineShoppingCart /> {context.counter}
                </li>

            </ul>

        </nav>
    )
}

export default NavBar
