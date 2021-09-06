import React from "react";
import Quality from "./quality";
import BookMark from "./bookMark";

const User = ({ handleStatus, handleDelete, user, status }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <Quality qualities={user.qualities} />
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <BookMark handleStatus={handleStatus} />
      </td>
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

export default User;
