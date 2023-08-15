import React from "react";
import { useAppContext } from "../AppContext";

const SearchForm = () => {
  const { searchValue, setSearch } = useAppContext();
  const handleSubmit = (e) => {
    const searchValue = e.target.search.value;
    e.preventDefault();
    if (!searchValue) return;
    setSearch(searchValue);
  };

  return (
    <section>
      <h1 className="title">ImageFinder</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
