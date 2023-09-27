function RatingSelect({ onSelect }) {
  return (
    <div className="rating">
      <input
        type="radio"
        name="rating-2"
        value={1}
        onChange={onSelect}
        className="mask mask-star-2 bg-yellow-400"
      />
      <input
        type="radio"
        name="rating-2"
        value={2}
        onChange={onSelect}
        className="mask mask-star-2 bg-yellow-400"
      />
      <input
        type="radio"
        name="rating-2"
        value={3}
        onChange={onSelect}
        className="mask mask-star-2 bg-yellow-400"
      />
      <input
        type="radio"
        name="rating-2"
        value={4}
        onChange={onSelect}
        className="mask mask-star-2 bg-yellow-400"
      />
      <input
        type="radio"
        name="rating-2"
        value={5}
        onChange={onSelect}
        className="mask mask-star-2 bg-yellow-400"
      />
    </div>
  )
}

export default RatingSelect
