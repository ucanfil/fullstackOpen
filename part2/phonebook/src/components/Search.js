const Search = ({ filterBy, handleFilterBy }) => (
    <>
      <div>
        <label>
          Filter shown by: <input type="text" value={filterBy} onChange={handleFilterBy} />
        </label>
      </div>
      <br />
    </>
  );

export default Search;
