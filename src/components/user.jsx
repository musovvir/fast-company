import React from "react";
import Quality from "./quality";

const User = (props) => {
  const user = props.users.map((user) => {
    return (
      <>
        <tr>
          <td>{user.name}</td>
          <Quality qualities={user.qualities} />
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}</td>
          <td>
            <button
              onClick={() => props.handleDelete(user._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  });

  return <>{user}</>;
};

export default User;
