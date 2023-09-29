import Pagination from "@/components/Pagination"
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
      <main className="grid lg:grid-cols-12 my-20">
        <Search queryParams={queryParams} />
        <div className="col-span-2">
          <FiltersNav queryParams={queryParams} />
        </div>
        <section className="flex flex-wrap gap-4 items-center justify-center col-span-10 lg:max-h-[70vh] lg:overflow-y-scroll lg:no-scrollbar">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
        <div className="col-span-12 mt-8 mx-auto">
          <Pagination
            page={page}
            totalPages={totalPages}
            queryParams={queryParams}
          />
        </div>
      </main>
    </Container>
  )
}

export default Products

export async function getServerSideProps({ query }) {
  //fetchAllProducts(category="some category", query = "", limit = 4, skip = 0,minPrice,max price, rating=0)
  //fetch(`https://dummyjson.com/products?limit=10&skip=${(currentPage - 1) * 10}`)
  //options {}
  const page = query.page ? Number(query.page) : 1
  const search = query.search ? query.search : ""
  const category = query.category ? query.category : ""
  const minPrice = query.minPrice ? Number(query.minPrice) : 0
  const maxPrice = query.maxPrice ? Number(query.maxPrice) : 0
  const rating = query.rating ? query.rating : 0
  const limit = !!Number(maxPrice) && !!Number(minPrice) ? 100 : 8
  const skip = (page - 1) * limit
  const { data, products } = await fetchAllProducts(
    category,
    search,
    limit,
    skip,
    minPrice,
    maxPrice,
    rating,
  )
  const totalPages = Math.ceil(data.total / limit)
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
