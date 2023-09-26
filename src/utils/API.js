const BASE_URL = "https://api.escuelajs.co/api/v1"

export const fetchAllProducts = async (offset = 0, limit = 8) => {
  const response = await fetch(
    `${BASE_URL}/products?offset=${offset}&limit=${limit}`,
  )
  const data = await response.json()
  return data
}
