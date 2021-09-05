import React from "react";

const SearchStatus = ({ renderPhrase, users }) => {
  return <span className="badge bg-primary">{() => renderPhrase(users)}</span>;
};

export default SearchStatus;
