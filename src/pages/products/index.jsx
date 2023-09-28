import ProductCard from "@/components/Products/ProductCard"
import FiltersNav from "@/components/filters/FilterNav"
import Search from "@/components/filters/Search"
import Container from "@/components/layouts/Container"
import { fetchAllProducts } from "@/utils/API"
import Link from "next/link"

function Products({
  products,
  totalPages,
  page,
  category,
  search,
  maxPrice,
  rating,
}) {
  const queryParams = {
    ...(category ? { category } : {}),
    ...(search ? { search } : {}),
    ...(maxPrice ? { maxPrice } : {}),
    ...(rating ? { rating } : {}),
  }
  return (
    <Container>
      <Link
        href={{
          pathname: "/products",
          query: {
            ...queryParams,
            page: page > 1 ? page - 1 : 1,
          },
        }}
      >
        Prev
      </Link>
      {page + " / " + totalPages}
      <Link
        href={{
          pathname: "/products",
          query: {
            ...queryParams,
            page: page === totalPages ? totalPages : page + 1,
          },
        }}
      >
        Next
      </Link>
      <main className="grid lg:grid-cols-12 my-20">
        <Search queryParams={queryParams} />
        <FiltersNav queryParams={queryParams} />
        <section className="flex flex-wrap gap-4 items-center justify-center col-span-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </Container>
  )
}

export default Products

export async function getServerSideProps({ query }) {
  //fetchAllProducts(category="some category", query = "", limit = 4, skip = 0,max price, rating=0)
  //fetch(`https://dummyjson.com/products?limit=10&skip=${(currentPage - 1) * 10}`)
  //options {}
  const page = query.page ? Number(query.page) : 1
  const search = query.search ? query.search : ""
  const category = query.category ? query.category : ""
  const maxPrice = query.maxPrice ? query.maxPrice : 0
  const rating = query.rating ? query.rating : 0
  const limit = 8
  const skip = (page - 1) * limit
  const { data, products } = await fetchAllProducts(
    category,
    search,
    limit,
    skip,
    maxPrice,
    rating,
  )
  const totalPages = Math.ceil(data.total / limit)
  // const products = await data.products
  return {
    props: {
      products,
      totalPages,
      page,
      category,
      search,
      maxPrice,
    },
  }
}
