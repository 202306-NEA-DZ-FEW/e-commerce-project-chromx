import ProductCard from "@/components/ProductCard"
import Container from "@/components/layouts/Container"
import { fetchAllProducts } from "@/utils/API"
import Link from "next/link"

function Products({ products, totalPages, page }) {
  return (
    <Container>
      <Link
        href={{
          pathname: "/products",
          query: { page: page > 1 ? page - 1 : 1 },
        }}
      >
        Prev
      </Link>
      {page + " / " + totalPages}
      <Link
        href={{
          pathname: "/products",
          query: {
            page: page === totalPages ? totalPages : page + 1,
          },
        }}
      >
        Next
      </Link>
      <section className="flex flex-wrap gap-4 items-center justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </Container>
  )
}

export default Products

export async function getServerSideProps({ query }) {
  //fetchAllProducts(category="some category", query = "", limit = 4, skip = 0,max price, rating=0)
  //fetch(`https://dummyjson.com/products?limit=10&skip=${(currentPage - 1) * 10}`)
  const page = query?.page ? Number(query.page) : 1
  const limit = 8
  const skip = (page - 1) * limit
  const { data, products } = await fetchAllProducts("", "", limit, skip)
  const totalPages = Math.ceil(data.total / limit)
  // const products = await data.products
  return {
    props: {
      products,
      totalPages,
      page,
    },
  }
}
