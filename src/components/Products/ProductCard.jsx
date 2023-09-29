//library imports
import Link from "next/link"
import Image from "next/image"
import { BiCartAdd } from "react-icons/bi"
import { Rating } from "react-simple-star-rating"
import { auth, onAddToCart } from "@/utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

//component imports
import FormattedPrice from "./FormattedPrice"

function ProductCard({ product }) {
  const [user, loading] = useAuthState(auth)
  const originalPrice = product.price
  const discountPercentage = product.discountPercentage
  const finalPrice = originalPrice - originalPrice * (discountPercentage / 100)

  return (
    <div className="card card-compact bg-white shadow-sm md:max-w-70 w-60 group">
      {/* ========== card head ========== */}
      <Link href={"/products/" + product.id}>
        <figure className="w-full h-[220px] rounded-2xl relative">
          <Image
            fill
            className="w-full h-full group-hover:scale-110 duration-200 object-cover"
            src={product.thumbnail}
            alt={product.title}
            priority
          />
        </figure>
      </Link>
      {/* ========== card body ========== */}
      <div className="card-body">
        <Link
          title={product.title}
          href={"/products/" + product.id}
          className="card-title"
        >
          {product.title.length > 15
            ? product.title.substring(0, 15) + "..."
            : product.title}
        </Link>
        <Rating
          initialValue={product.rating}
          allowFraction
          readonly
          SVGstyle={{ display: "inline-block", width: "25px" }}
        />

        <div className="card-actions justify-between items-end">
          <div>
            <p className="text-sm line-through inline text-error">
              <FormattedPrice amount={originalPrice} />
            </p>
            <h3 className="text-2xl font-bold text-success">
              <FormattedPrice amount={finalPrice} />
            </h3>
          </div>
          <button
            onClick={() => onAddToCart(user, product, 1)}
            className="btn btn-sm btn-square btn-ghost"
          >
            <BiCartAdd className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
