import React, { useState } from "react";
import PropTypes from "prop-types";
/*
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: "" };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { handleSearch } = this.props;
    const { search } = this.state;

    return (
      <div className="search-container">
        <input
          value={this.state.search}
          onChange={this.handleChange}
          type="text"
          className="search-input"
        />
        <button className="search-btn" onClick={() => handleSearch(search)}>
          Search
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};*/

function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <div className="search-container">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        className="search-input"
      />
      <button className="search-btn" onClick={callSearchFunction}>
        Search
      </button>
    </div>
  );
}

export default Search;
