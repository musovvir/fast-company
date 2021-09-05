import React from "react";
import User from "./user";
import SearchStatus from "./searchStatus";

const Users = ({ handleDelete, renderPhrase, users }) => {
  return (
    <>
      <SearchStatus renderPhrase={renderPhrase} users={users} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>
          <User users={users} handleDelete={handleDelete} />
        </tbody>
      </table>
    </>
  );
};

export default Users;
