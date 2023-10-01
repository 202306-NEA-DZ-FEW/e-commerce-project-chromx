import { CalculateDiscount } from "@/utils/calculateDiscountPrice"
import Image from "next/image"
import React, { useState } from "react"
import { BiMinus, BiPlus } from "react-icons/bi"
import { FiTrash2 } from "react-icons/fi"
import FormattedPrice from "../Products/FormattedPrice"
import { deleteProduct, updateProduct } from "@/utils/firebase"
import { motion } from "framer-motion"
import { toast } from "react-toastify"

function CartItem({ item }) {
  const price = CalculateDiscount(item.price, item.discountPercentage)
  const [qty, setQty] = useState(item.quantity)

  function handleIncreament() {
    if (qty === item.stock) {
      toast.error("You reached the max avilable quantity!😥", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 1500,
      })
      return
    }
    const newQty = qty + 1
    setQty(newQty)
    updateProduct(item, newQty)
  }
  function handleDecrement() {
    if (qty === 1) return
    const newQty = qty - 1
    setQty(newQty)
    updateProduct(item, newQty)
  }
  function handleDelete(itemId) {
    deleteProduct(itemId)
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white flex justify-between items-center rounded-xl p-4"
    >
      <div className="flex items-center gap-3 flex-1">
        <div className="avatar">
          <div className="w-16 rounded-xl">
            <Image
              className="w-full h-full rounded-xl object-cover"
              src={item.thumbnail}
              alt={item.title}
              fill
              priority
            />
          </div>
        </div>
        <h1 className="card-title font-bold">{item.title}</h1>
      </div>
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={handleDecrement}
          className="btn btn-sm btn-active btn-square"
        >
          <BiMinus className="text-2xl" />
        </button>
        <span className="text-xl font-medium">{qty}</span>
        <button
          onClick={handleIncreament}
          className="btn btn-sm btn-active btn-square"
        >
          <BiPlus className="text-2xl " />
        </button>
      </div>
      <div className=" flex items-center gap-3">
        <h3 className="text-xl font-bold text-success">
          <FormattedPrice amount={price} />
        </h3>
        <div className="">
          <button
            onClick={() => handleDelete(item.id)}
            className="btn btn-sm btn-error btn-square"
          >
            <FiTrash2 className="text-lg text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
export default CartItem
