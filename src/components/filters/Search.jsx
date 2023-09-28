import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

function Search({ queryParams }) {
  const router = useRouter()
  const [text, setText] = useState("")
  const [query] = useDebounce(text, 500)

  useEffect(() => {
    if (!query) {
      router.push(`/products`)
    } else {
      router.push({
        pathName: `/products`,
        query: { ...queryParams, search: query },
      })
    }
  }, [query, router])

  return (
    <div class="col-span-12 my-14 text-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search"
        className="w-full max-w-xl mx-auto input input-md rounded-xl"
      />
    </div>
  )
}

export default Search
