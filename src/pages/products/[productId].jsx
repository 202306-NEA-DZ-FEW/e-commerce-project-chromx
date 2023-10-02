import Container from "@/components/layouts/Container"
import { BASE_URL, fetchAllProducts, fetchProduct } from "@/utils/API"
import ProductDetails from "@/components/Products/ProductDetails"
import SimilarProductsList from "@/components/Products/SimilarProductsList"
import Head from "next/head"

function ProductDetailsPage({ product, similarProducts, category }) {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <Container>
        <ProductDetails product={product} />
        <SimilarProductsList
          category={category}
          similarProducts={similarProducts}
        />
      </Container>
    </>
  )
}

export default ProductDetailsPage

export async function getStaticPaths() {
  const res = await fetch(BASE_URL)
  const data = await res.json()

  return {
    paths: data.products.map((product) => ({
      params: { productId: product.id.toString() },
    })),
    fallback: false,
  }
}

//SSG
export async function getStaticProps({ params }) {
  const product = await fetchProduct(params.productId)
  if (!product) {
    return { notFound: true }
  }
  const category = product.category || ""
  const { products } = await fetchAllProducts(category)
  return {
    props: {
      product,
      similarProducts: products,
      category,
    },
  }
}
