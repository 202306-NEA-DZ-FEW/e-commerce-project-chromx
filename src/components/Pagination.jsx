import Link from "next/link"

function Pagination({ page, totalPages, queryParams }) {
  return (
    <div className="join">
      <Link
        href={{
          pathname: "/products",
          query: {
            ...queryParams,
            page: page > 1 ? page - 1 : 1,
          },
        }}
      >
        <button disabled={page == 1} className="join-item btn">
          «
        </button>
      </Link>
      <button className="join-item btn">
        Page {page + " of " + totalPages}
      </button>
      <Link
        href={{
          pathname: "/products",
          query: {
            ...queryParams,
            page: page === totalPages ? totalPages : page + 1,
          },
        }}
      >
        <button disabled={page === totalPages} className="join-item btn">
          »
        </button>
      </Link>
    </div>
  )
}

export default Pagination
