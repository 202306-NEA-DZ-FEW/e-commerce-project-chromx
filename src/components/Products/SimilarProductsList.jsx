//library imports
import Link from "next/link"

//component imports
import ProductCard from "./ProductCard"

function SimilarProductsList({ similarProducts, category }) {
  return (
    <section className="my-20">
      <Link
        href={{
          pathname: "/products",
          query: { category: category },
        }}
      >
        <h1 className="text-3xl font-bold mb-10">See more of {category}:</h1>
      </Link>
      <div className="flex flex-wrap gap-4 justify-center ">
        {similarProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default SimilarProductsList
