export const BASE_URL = "https://dummyjson.com/products"

export const fetchAllProducts = async (
  category = undefined,
  query = "",
  limit = 4,
  skip = 0,
  minPrice = 0,
  MaxPrice = 0,
  rating = 0,
) => {
  if (category) {
    const response = await fetch(`${BASE_URL}/category/${category}`)
    const data = await response.json()
    //filter the products in the category
    const filtredProducts = await data.products
      .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
      .filter((p) => (minPrice ? p.price >= minPrice : true))
      .filter((p) => (MaxPrice ? p.price <= MaxPrice : true))
      .filter((p) =>
        minPrice && MaxPrice
          ? p.price >= minPrice && p.price <= MaxPrice
          : true,
      )
      .filter((p) => (rating ? p.rating >= rating : true))

    return { data, products: filtredProducts }
  } else {
    const response = await fetch(
      `${BASE_URL}/search?q=${query}&limit=${limit}&skip=${skip}`,
    )
    const data = await response.json()
    const filtredProducts = await data.products
      .filter((p) => (minPrice ? p.price >= minPrice : true))
      .filter((p) => (MaxPrice ? p.price <= MaxPrice : true))
      .filter((p) =>
        minPrice && MaxPrice
          ? p.price >= minPrice && p.price <= MaxPrice
          : true,
      )
      .filter((p) => (rating ? p.rating >= rating : true))

    // const products = await data.products
    return { data, products: filtredProducts }
  }
}

export const fetchProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`)
  const data = await res.json()
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
