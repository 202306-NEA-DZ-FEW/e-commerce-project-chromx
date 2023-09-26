const BASE_URL = "https://dummyjson.com/products"

export const fetchAllProducts = async (query = "", limit = 4, skip = 0) => {
  const response = await fetch(
    `${BASE_URL}/search?q=${query}&limit=${limit}&skip=${skip}`,
  )
  const data = await response.json()
  return data
}

export const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
]
