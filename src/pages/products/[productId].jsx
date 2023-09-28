import Container from "@/components/layouts/Container"
import { fetchAllProducts, fetchProduct } from "@/utils/API"
import ProductDetails from "@/components/Products/ProductDetails"
import SimilarProductsList from "@/components/Products/SimilarProductsList"

function ProductDetailsPage({ product, similarProducts, category }) {
  return (
    <Container>
      <ProductDetails product={product} />
      <SimilarProductsList
        category={category}
        similarProducts={similarProducts}
      />
    </Container>
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
