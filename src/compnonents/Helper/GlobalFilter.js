function GlobalFilter({ filter, setFilter }) {
  return (
    <>
      <span>
        Search:{' '}
        <input
          value={filter || ''}
          type="text"
          placeholder="search..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </>
  );
}

export default GlobalFilter;
