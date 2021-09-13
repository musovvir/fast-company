import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ renderPhrase, users }) => {
  return <span className="badge bg-primary">{renderPhrase(users)}</span>;
};

SearchStatus.propTypes = {
  renderPhrase: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default SearchStatus;
