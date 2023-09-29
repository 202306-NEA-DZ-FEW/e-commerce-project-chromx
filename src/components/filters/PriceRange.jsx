import { useRouter } from "next/navigation"

function PriceRange({ queryParams }) {
  const router = useRouter()

  function handleSelect(e) {
    const value = Number(e.target.value)
    switch (value) {
      case 1:
        router.push({
          pathname: "/products",
          query: { ...queryParams, minPrice: 1, maxPrice: 20 },
        })
        break
      case 2:
        router.push({
          pathname: "/products",
          query: { ...queryParams, minPrice: 20, maxPrice: 50 },
        })
        break
      case 3:
        router.push({
          pathname: "/products",
          query: { ...queryParams, minPrice: 50, maxPrice: 100 },
        })
        break
      case 4:
        router.push({
          pathname: "/products",
          query: { ...queryParams, minPrice: 100, maxPrice: 300 },
        })
        break
      case 5:
        router.push({
          pathname: "/products",
          query: { ...queryParams, minPrice: 300, maxPrice: 500 },
        })
        break
      case 6:
        router.push({
          pathname: "/products",
          query: { ...queryParams, minPrice: 500, maxPrice: 3000 },
        })
        break
      default:
        router.push("/products")
    }
  }

  return (
    <form class="form-control" onChange={handleSelect}>
      <label class="cursor-pointer label">
        <lapel class="label-text">$0-20</lapel>
        <input
          type="radio"
          name="opt"
          class="radio radio-sm radio-success"
          value={1}
        />
      </label>
      <label class="cursor-pointer label">
        <lapel class="label-text">$20-50</lapel>
        <input
          type="radio"
          name="opt"
          class="radio radio-sm radio-success"
          value={2}
        />
      </label>
      <label class="cursor-pointer label">
        <lapel class="label-text">$50-100</lapel>
        <input
          type="radio"
          name="opt"
          class="radio radio-sm radio-success"
          value={3}
        />
      </label>
      <label class="cursor-pointer label">
        <lapel class="label-text">$100-300</lapel>
        <input
          type="radio"
          name="opt"
          class="radio radio-sm radio-success"
          value={4}
        />
      </label>
      <label class="cursor-pointer label">
        <lapel class="label-text">$300-500</lapel>
        <input
          type="radio"
          name="opt"
          class="radio radio-sm radio-success"
          value={5}
        />
      </label>
      <label class="cursor-pointer label">
        <lapel class="label-text">$500-max</lapel>
        <input
          type="radio"
          name="opt"
          class="radio radio-sm radio-success"
          value={6}
        />
      </label>
    </form>
  )
}

export default PriceRange
