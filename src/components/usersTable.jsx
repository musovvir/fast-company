import React from "react";
import User from "./user";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";

const UsersTable = ({ users, onSort, selectedSort, handleDelete }) => {
  const columns = {
    name: { iter: "name", name: "Имя" },
    qualities: { name: "Имя" },
    professions: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: { iter: "bookmark", name: "Избранное" },
    delete: {}
  };
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <tbody>
        {users.map((user) => (
          <User key={user._id} user={user} handleDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired
};

export default UsersTable;
