import CartCheckoutCard from "@/components/CartComponent/CartCheckoutCard"
import CartItemsList from "@/components/CartComponent/CartItemsList"
import Container from "@/components/layouts/Container"
import { auth, db } from "@/utils/firebase"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

function CartPage() {
  const [cartItems, setCartItems] = useState([])
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  const subTotal = cartItems.reduce(
    (total, item) =>
      total +
      (item.price - item.price * (item.discountPercentage / 100)) *
        item.quantity,
    0,
  )

  const getData = () => {
    if (loading) return
    // if we don't have a user direct them ro login page
    if (!user) return router.push("/auth/login")
    //If we have a user => get data from firebase:
    const collectionRef = collection(db, "cartItems")
    const q = query(collectionRef, where("user", "==", user.uid))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setCartItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
    return unsubscribe
  }

  useEffect(() => {
    getData()
  }, [user, loading])

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta
          name="description"
          content="see your cart items all in one place"
        />
      </Head>
      <main className="my-10 min-h-screen py-20">
        <Container>
          <div className="flex flex-col gap-8">
            {loading && <p>loading...</p>}
            {cartItems && <CartItemsList cartItems={cartItems} user={user} />}
            {cartItems.length ? <CartCheckoutCard subTotal={subTotal} /> : null}
          </div>
        </Container>
      </main>
    </>
  )
}

export default CartPage
