import Link from "next/link"
import CartItem from "./CartItem"
import { BsChevronLeft } from "react-icons/bs"
import { resetCart } from "@/utils/firebase"

function CartItemsList({ cartItems, user }) {
  return (
    <section className="flex flex-col gap-3">
      {!cartItems.length && user && (
        <div className="text-center my-4">
          <h1 className="text-4xl font-bold">Your cart is empty</h1>
          <p>
            Go back home and add some
            <BsChevronLeft className="inline ml-2" />
            <Link href="/" className="btn btn-link">
              Home
            </Link>
          </p>
        </div>
      )}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {cartItems.length ? (
        <div className="self-end">
          <button
            onClick={() => resetCart(user.uid)}
            className="btn btn-error btn-sm text-white"
          >
            Reset cart
          </button>
        </div>
      ) : null}
    </section>
  )
}

export default CartItemsList
