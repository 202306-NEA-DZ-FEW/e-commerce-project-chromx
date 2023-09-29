//library imports
import Link from "next/link"
import Image from "next/image"
import { BiCartAdd } from "react-icons/bi"
import { Rating } from "react-simple-star-rating"
import { auth, db } from "@/utils/firebase"
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { toast } from "react-toastify"

//component imports
import FormattedPrice from "./FormattedPrice"

function ProductCard({ product }) {
  const [user, loading] = useAuthState(auth)
  const originalPrice = product.price
  const discountPercentage = product.discountPercentage
  const finalPrice = originalPrice - originalPrice * (discountPercentage / 100)

  async function onAddToCart() {
    if (!user) {
      toast.error("You need to login first😡", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      })
      return
    }
    const collectionRef = collection(db, "cartItems")
    const q = query(
      collectionRef,
      where("id", "==", product.id),
      where("user", "==", user.uid),
    )

    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      const cartItemDoc = querySnapshot.docs[0]
      const currentQuantity = cartItemDoc.data().quantity
      await updateDoc(doc(db, "cartItems", cartItemDoc.id), {
        quantity: currentQuantity + 1,
        timestamp: serverTimestamp(),
      })
      const updatedQuantity = currentQuantity + 1
      toast.success(
        `You Added ${updatedQuantity} items of that product so far! 🤑`,
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        },
      )
    } else {
      await addDoc(collectionRef, {
        ...product,
        quantity: 1,
        timestamp: serverTimestamp(),
        user: user.uid,
        avatar: user.photoURL,
        username: user.displayName,
      })
      toast.success("Your product has been added successfully 👌", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      })
    }
  }

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
            onClick={onAddToCart}
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
