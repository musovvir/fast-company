import React, { useState } from "react";

const BookMark = () => {
  const [favorite, setFavorite] = useState(false);
  const isFavorite = () => (favorite ? setFavorite(false) : setFavorite(true));
  const qwer = () => {
    if (favorite) {
      return <i className="bi bi-bookmark-heart-fill"></i>;
    } else {
      return <i className="bi bi-bookmark"></i>;
    }
  };

  return (
    <td className="text-center">
      <span className="bookmark" onClick={isFavorite}>
        {qwer()}
      </span>
    </td>
  );
};

export default BookMark;
