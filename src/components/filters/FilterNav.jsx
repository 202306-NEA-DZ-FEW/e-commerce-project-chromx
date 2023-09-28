import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { useDebounce } from "use-debounce"

import PriceRange from "./PriceRange"
import Category from "./Category"
import RatingSelect from "./RatingSelect"

function FiltersNav({ queryParams }) {
  const router = useRouter()
  const [number, setNumber] = useState(0)
  const [price] = useDebounce(number, 500)

  useEffect(() => {
    if (!price) {
      router.push(`/products`)
    } else {
      router.push({
        pathname: `/products`,
        query: { ...queryParams, maxPrice: price },
      })
    }
  }, [price, router])

  function handleClearFilters() {
    setNumber(0)
    router.push("/products")
  }

  function onSelect(e) {
    router.push({
      pathname: `/products`,
      query: { ...queryParams, rating: e.target.value },
    })
  }

  return (
    <ul className="menu bg-white w-56 rounded-box col-span-2">
      <li>
        <a>Price</a>
      </li>
      <PriceRange number={number} setNumber={setNumber} />
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
