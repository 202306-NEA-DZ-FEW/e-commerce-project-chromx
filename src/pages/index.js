import Banner from "@/components/Banner"
import ProductCard from "@/components/Products/ProductCard"
import ProductSection from "@/components/Products/ProductSection"
import Container from "@/components/layouts/Container"
import { fetchAllProducts } from "@/utils/API"
import { electronicsSection, menSection, womenSection } from "@/utils/constants"
import { motion } from "framer-motion"

export default function Home({ products }) {
  return (
    <main>
      <Banner />
      <Container>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center my-4 md:my-8"
        >
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="card-body">Order it for you or for your beloved ones</p>
        </motion.div>
        <section className="flex flex-wrap gap-4 justify-center mb-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </Container>
      <div className="py-10 bg-teal-600 text-white">
        <ProductSection {...menSection} />
      </div>
      <div className="py-10 bg-pink-300 text-white">
        <ProductSection {...womenSection} />
      </div>
      <div className="py-10 bg-gray-600 text-white">
        <ProductSection {...electronicsSection} />
      </div>
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
