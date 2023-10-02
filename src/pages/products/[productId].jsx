import Container from "@/components/layouts/Container"
import { fetchAllProducts, fetchProduct } from "@/utils/API"
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
        <div className="py-8">
          <ProductDetails product={product} />
          <SimilarProductsList
            category={category}
            similarProducts={similarProducts}
          />
        </div>
      </Container>
    </>
  )
}

export default ProductDetailsPage

export async function getServerSideProps(context) {
  const { productId } = context.query
  const product = await fetchProduct(productId)
  const category = product.category
  const { products } = await fetchAllProducts(category)
  return {
    props: {
      product,
      similarProducts: products,
      category,
    },
  }
}
