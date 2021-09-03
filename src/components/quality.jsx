import React from "react";

const Quality = (props) => {
  const quality = props.qualities.map((quality, i) => {
    return (
      <span key={i} className={`badge bg-${quality.color}`}>
        {quality.name}
      </span>
    );
  });

  return <th>{quality}</th>;
};

export default Quality;
