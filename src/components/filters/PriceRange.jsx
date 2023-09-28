function PriceRange({ number, setNumber }) {
  return (
    <div>
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        type="range"
        max="1000"
        className="range range-xs range-success"
      />
      less then: ${number ? number : 0}
    </div>
  )
}

export default PriceRange
