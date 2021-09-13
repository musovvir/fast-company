import React from "react";
import Quality from "./quality";
import BookMark from "./bookMark";
import PropTypes from "prop-types";

const User = ({ handleDelete, user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <Quality qualities={user.qualities} />
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <BookMark />
      <td>
        <button
          onClick={() => handleDelete(user._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default User;
