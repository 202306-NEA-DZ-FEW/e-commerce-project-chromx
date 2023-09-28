import Link from "next/link"
import { categories } from "@/utils/API"
import { BiCategoryAlt } from "react-icons/bi"

function Category({ queryParams }) {
  return (
    <details>
      <summary>
        <BiCategoryAlt />
        Category
      </summary>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link
              href={{
                pathname: "/products",
                query: { category: category },
              }}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default Category
