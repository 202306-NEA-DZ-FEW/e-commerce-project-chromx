import Link from "next/link"
import CartItem from "./CartItem"
import { BsChevronLeft } from "react-icons/bs"

function CartItemsList({ cartItems }) {
  return (
    <section className="flex flex-col gap-3">
      {!cartItems.length && (
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
    </section>
  )
}

export default CartItemsList
