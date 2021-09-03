import React, { useState } from "react";
import api from "../api";
import User from "./user";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (usersId) => {
    setUsers(users.filter((user) => usersId !== user._id));
  };
  const renderPhrase = (number) => {
    if (number === 2 || number === 3 || number === 4) {
      return `${number} человека тусанeт с тобой сегодня`;
    }
    if (number <= 0) {
      return `С тобой никто не тусанет сегодня :(`;
    } else {
      return `${number} человек тусанут с тобой сегодня`;
    }
  };
  return (
    <>
      <span class="badge bg-primary">{renderPhrase(users.length)}</span>
      <table class="table">
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
