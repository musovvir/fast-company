import React from "react";

const Quality = ({ qualities }) => {
  console.log(qualities);
  const quality = qualities.map((quality, i) => {
    return (
      <span key={i} className={`badge bg-${quality.color} m-1`}>
        {quality.name}
      </span>
    );
  });

  return <th>{quality}</th>;
};

export default Quality;
