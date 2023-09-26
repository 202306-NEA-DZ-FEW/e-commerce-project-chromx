import Banner from "@/components/Banner"
import Container from "@/components/layouts/Container"
import { fetchAllProducts } from "@/utils/API"

export default function Home({ products }) {
  console.log(products)
  return (
    <main>
      <Banner />
      <Container>
        <h1>Home Page!!</h1>
      </Container>
    </main>
  )
}

export async function getStaticProps() {
  //fetchAllProducts(query = "", limit = 4, skip = 0)
  const data = await fetchAllProducts("", 8, 0)
  const products = await data.products
  return {
    props: {
      products,
    },
  }
}
