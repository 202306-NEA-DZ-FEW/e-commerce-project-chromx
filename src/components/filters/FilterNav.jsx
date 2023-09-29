import { useRouter } from "next/navigation"
import PriceRange from "./PriceRange"
import RatingSelect from "./RatingSelect"
import Category from "./Category"

function FiltersNav({ queryParams }) {
  const router = useRouter()

  function handleClearFilters() {
    router.push("/products")
  }

  function onSelect(e) {
    router.push({
      pathname: `/products`,
      query: { ...queryParams, rating: e.target.value },
    })
  }

  return (
    <ul className="menu bg-white w-56 rounded-box">
      <h1 className="card-title p-2">Filters</h1>
      <li className="p-2">Price</li>
      <PriceRange queryParams={queryParams} />
      <li>
        <Category />
      </li>
      <li>
        <a>Rating:</a>
        <RatingSelect onSelect={onSelect} />
      </li>
      <button
        onClick={handleClearFilters}
        className="btn btn-md btn-error mt-10"
      >
        Clear ALL
      </button>
    </ul>
  )
}

export default FiltersNav
