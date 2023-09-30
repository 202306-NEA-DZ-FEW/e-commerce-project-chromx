import FormattedPrice from "../Products/FormattedPrice"

function CartCheckoutCard({ subTotal }) {
  const Shipping = 10
  return (
    <div className="bg-white flex flex-col justify-between gap-4 rounded-xl p-4">
      <h1 className="text-3xl font-bold mb-8">Cart Total</h1>
      <div className="flex items-center gap-3 flex-1 border-b-2 border-neutral">
        <h3 className="text-2xl font-medium flex-1 ">Subtotal</h3>
        <p className="text-lg font-medium flex-1 ">
          <FormattedPrice amount={subTotal} />
        </p>
      </div>
      <div className="flex items-center gap-3 flex-1 border-b-2 border-neutral">
        <h3 className="text-2xl font-medium flex-1 ">Total</h3>
        <p className="text-lg font-medium flex-1 ">
          <FormattedPrice amount={Shipping} />
        </p>
      </div>
      <div className="flex items-center gap-3 flex-1 border-b-2 border-neutral">
        <h3 className="text-2xl font-medium flex-1 ">Total</h3>
        <p className="text-lg font-medium flex-1 ">
          <FormattedPrice amount={subTotal + Shipping} />
        </p>
      </div>
      <div>
        <button className="btn btn-neutral btn-sm my-8">
          continue to checkout
        </button>
      </div>
    </div>
  )
}

export default CartCheckoutCard
