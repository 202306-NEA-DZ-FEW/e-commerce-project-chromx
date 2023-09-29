import Link from "next/link"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { auth, db } from "@/utils/firebase"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { collection, onSnapshot, query, where } from "firebase/firestore"

function Navbar() {
  const [user, setUser] = useState(null)
  const [cartItems, setCartItems] = useState([])

  const subTotal = cartItems.reduce(
    (total, item) =>
      total +
      (item.price - item.price * (item.discountPercentage / 100)) *
        item.quantity,
    0,
  )

  const getData = () => {
    if (!user) return
    //If we have a user => get data from firebase:
    const collectionRef = collection(db, "cartItems")
    const q = query(collectionRef, where("user", "==", user.uid))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setCartItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
    return unsubscribe
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
        setCartItems([])
      }
    })
    getData()
  }, [user])

  return (
    <>
      <nav className="navbar sticky top-0 z-20 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost font-black text-xl normal-case"
          >
            Chromx.
          </Link>
        </div>
        <div className="items-stretch hidden lg:flex">
          <Link href="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link href="/products" className="btn btn-ghost btn-sm rounded-btn">
            Products
          </Link>
          <Link href="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end mx-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <HiOutlineShoppingCart className="text-2xl" />
                {cartItems ? (
                  <span
                    className={`badge badge-sm indicator-item ${
                      cartItems?.length && "badge-warning"
                    }`}
                  >
                    {cartItems?.length}
                  </span>
                ) : (
                  <span className={`badge badge-sm indicator-item`}>0</span>
                )}
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {cartItems?.length} Items
                </span>
                <span className="text-info">Subtotal: {subTotal}</span>
                <div className="card-actions">
                  <Link
                    // onClick={handleGoToCart}
                    href="/cart"
                    className="btn btn-neutral btn-block"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img title={user.displayName} src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => auth.signOut()}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-sm btn-neutral">
              <Link href="/auth/login">Sign in</Link>
            </button>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
