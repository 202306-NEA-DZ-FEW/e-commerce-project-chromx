import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { deleteDoc, getDoc, getFirestore } from "firebase/firestore"
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
// Add product to cart
export async function onAddToCart(user, product, qty) {
  // check for user
  if (!user) {
    toast.error("You need to login first😡", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1500,
    })
    return
  }
  // check for valid quantity
  if (qty === 0) {
    toast.error("Add one of quantity at least!😥", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1500,
    })
    return
  }
  // check for existing item
  const collectionRef = collection(db, "cartItems")
  const q = query(
    collectionRef,
    where("id", "==", product.id),
    where("user", "==", user.uid),
  )

  const querySnapshot = await getDocs(q)

  // update item
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
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 1500,
      },
    )
  }
  // add item
  else {
    await addDoc(collectionRef, {
      ...product,
      quantity: qty,
      timestamp: serverTimestamp(),
      user: user.uid,
      avatar: user.photoURL,
      username: user.displayName,
    })
    toast.success("Your product has been added successfully 👌", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1500,
    })
  }
}

// update product quantity in the cart
export async function updateProduct(product, qty) {
  try {
    // Assuming you have the user ID and document ID
    const docRef = doc(db, "cartItems", `${product.id}`)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      await updateDoc(docRef, {
        quantity: qty,
        timestamp: serverTimestamp(),
      })
      console.log("Cart item updated successfully")
    } else {
      console.log("Document does not exist.")
    }
  } catch (error) {
    console.error("Error updating cart item:", error)
  }
}

// delete single product from cart
export async function deleteProduct(itemId) {
  try {
    const docRef = doc(db, "cartItems", itemId)
    await deleteDoc(docRef)
    toast.success("Item deleted successfully 👌", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1500,
    })
  } catch (error) {
    toast.error("Error deleting item!😖", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1500,
    })
    console.error("Error deleting item:", error)
  }
}

// delete All product from cart
export async function resetCart(userId) {
  try {
    const collectionRef = collection(db, "cartItems")
    const q = query(collectionRef, where("user", "==", userId))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref)
    })
    toast.success("Item deleted successfully 👌", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1500,
    })
    console.log("All cart items deleted successfully for user:", userId)
  } catch (error) {
    toast.error("Error deleting cart items!😖", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1500,
    })
    console.error("Error deleting item:", error)
  }
}
