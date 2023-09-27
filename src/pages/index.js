import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard"
import Container from "@/components/layouts/Container"
import { fetchAllProducts } from "@/utils/API"

export default function Home({ products }) {
  return (
    <main>
      <Banner />
      <Container>
        <div className="text-center my-4 md:my-8">
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="card-body">Order it for you or for your beloved ones</p>
        </div>
        <section className="flex flex-wrap gap-4 justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </Container>
    </main>
  )
}

export async function getStaticProps() {
  //fetchAllProducts(category="some category", query = "", limit = 4, skip = 0)
  const data = await fetchAllProducts("sunglasses")
  const sunglasses = await data.products
  const dataTwo = await fetchAllProducts("womens-jewellery")
  const womensJewellery = await dataTwo.products
  const products = [...womensJewellery, ...sunglasses]
  return {
    props: {
      products,
    },
  }
}
