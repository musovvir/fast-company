import React from "react";
import PropTypes from "prop-types";

const Quality = ({ qualities }) => {
  const quality = qualities.map((quality, i) => {
    return (
      <span key={i} className={`badge bg-${quality.color} m-1`}>
        {quality.name}
      </span>
    );
  });

  return <th>{quality}</th>;
};

Quality.propTypes = {
  qualities: PropTypes.array.isRequired
};

export default Quality;
