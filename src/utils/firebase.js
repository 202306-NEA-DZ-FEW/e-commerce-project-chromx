import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { toast } from "react-toastify"

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

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore(app)

// helper functions
export async function onAddToCart(user, product, qty) {
  if (!user) {
    toast.error("You need to login first😡", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
    })
    return
  }
  if (qty === 0) {
    toast.error("Add one of quantity at least!😥", {
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
      quantity: currentQuantity + qty,
      timestamp: serverTimestamp(),
    })
    const updatedQuantity = currentQuantity + qty
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
      quantity: qty,
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
