
const Search = (props) => {
  const { term, setTerm, search } = props;
  function handleChange(e) {
    setTerm(e.target.value);
  }
  async function onSubmit(event) {
    event.preventDefault();
   await search(term);
  }
  return (
    <form className="Search">
      <p style={{ color: "red" }} className="typed">
        <em> {term && "Searched item: " + term}</em>
      </p>
      <input className="typed-text"
        type="text"
        value={term}
        onChange={handleChange}
      />
      <button className="submit" type="submit" onClick={onSubmit}> Search
      </button>
    </form>
  );
};

export default Search;