//library imports
import Image from "next/image"
import { Rating } from "react-simple-star-rating"
import { useState } from "react"
import { BiMinus, BiPlus } from "react-icons/bi"
import FormattedPrice from "./FormattedPrice"

function ProductDetails({ product }) {
  const [imageUrl, setImageUrl] = useState(product.thumbnail)
  const [selectedImg, setSelectedImg] = useState(product.thumbnail)
  const [inStock, setInStock] = useState(product.stock)
  const [quantity, setQuantity] = useState(0)

  function handleIncrement() {
    if (quantity === product.stock) return
    setQuantity((prev) => prev + 1)
    setInStock((prev) => prev - 1)
  }
  function handleDecrement() {
    if (quantity === 0) return
    setQuantity((prev) => prev - 1)
    setInStock((prev) => prev + 1)
  }

  //calculate price and discount
  const originalPrice = product.price
  const discountPercentage = product.discountPercentage
  const finalPrice = originalPrice - originalPrice * (discountPercentage / 100)

  const setImgPreview = (url) => {
    setImageUrl(url)
    setSelectedImg(url)
  }

  return (
    <div className="card lg:card-side bg-white shadow-xl w-[80%] mx-auto mt-20 ">
      <figure className="xl:h-[520px] lg:h-[580px] h-80 lg:w-[50%] w-full relative ">
        <Image
          className="w-full h-full object-cover lg:rounded-2xl"
          src={imageUrl}
          alt="image"
          fill
          priority
        />
        <div className="z-10 w-full h-full flex gap-4 items-end pb-8 justify-center">
          {product.images.map((img, index) => (
            <div key={index} className="avatar cursor-pointer">
              <div className="w-16 rounded-xl">
                <Image
                  onClick={() => setImgPreview(img)}
                  className={`w-full h-full rounded-xl object-cover ${
                    selectedImg === img ? "ring-4" : ""
                  }`}
                  src={img}
                  alt="image"
                  fill
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </figure>

      <div className="card-body flex flex-col lg:w-[50%]">
        <h1 className="card-title flex justify-between text-4xl font-bold">
          {product.title}
        </h1>
        <Rating
          initialValue={product.rating}
          allowFraction
          readonly
          SVGstyle={{ display: "inline-block", width: "38px" }}
        />
        <div className="flex flex-col h-full gap-4 items-start justify-around py-4">
          <p className="text-xl">{product.description}</p>
          <div className="flex gap-3 items-center my-2">
            <span className="text-xl">Add quantity:</span>
            <div className="btn-group">
              <button
                disabled={quantity === 0}
                onClick={handleDecrement}
                className="btn btn-sm btn-ghost"
              >
                <BiMinus className="text-2xl" />
              </button>
              <button className="btn btn-sm btn-ghost hover:none font-bold text-2xl">
                {quantity}
              </button>
              <button
                disabled={quantity === product.stock}
                onClick={handleIncrement}
                className="btn btn-sm btn-ghost"
              >
                <BiPlus className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="indicator">
            <span
              className={`indicator-item badge ${
                quantity < product.stock ? "badge-success" : "badge-error"
              }`}
            >
              {inStock}
            </span>
            <button className="btn btn-sm">In Stock</button>
          </div>
          <div className="flex gap-2">
            <span className="px-2 border-2 bg-red-200 border-red-700 rounded-full text-sm font-medium text-center">
              {product.category}
            </span>
            <span className="px-2 border-2 bg-teal-200 border-teal-700 rounded-full text-sm font-medium text-center">
              {product.brand}
            </span>
          </div>
        </div>

        <div className="card-actions flex flex-col">
          <h3 className="text-4xl font-bold text-success flex gap-2">
            <FormattedPrice amount={finalPrice} />
            <span className="text-base font-light line-through inline text-error">
              <FormattedPrice amount={originalPrice} />
            </span>
          </h3>

          <button className="btn btn-sm btn-neutral">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
