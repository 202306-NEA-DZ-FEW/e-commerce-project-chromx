import { categories } from "@/utils/API"
import Link from "next/link"
import { HiChevronDown, HiOutlineShoppingCart } from "react-icons/hi"

function Navbar() {
  const cart = null
  const user = null
  const total = 0

  return (
    <div className="navbar sticky top-0 z-20 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="md:flex-1">
        <Link href="/" className="btn btn-ghost font-black text-xl normal-case">
          Chromx.
        </Link>
      </div>
      <div className="dropdown flex-1">
        <label tabIndex={0} className="btn btn-small btn-ghost">
          Category <HiChevronDown className="text-xl" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full max-h-[500px] overflow-y-hidden"
        >
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: cat },
                }}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end mx-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <HiOutlineShoppingCart className="text-2xl" />
              {cart ? (
                <span
                  className={`badge badge-sm indicator-item ${
                    cart?.length && "badge-warning"
                  }`}
                >
                  {cart?.length}
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
                {cart ? cart.lenght : 0}
              </span>
              <span className="text-info">Subtotal: {total}</span>
              <div className="card-actions">
                <Link href="/cart" className="btn btn-primary btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80" />
              </div>
            </label>
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
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn btn-sm btn-neutral">Sign in</button>
        )}
      </div>
    </div>
  )
}

export default Navbar
