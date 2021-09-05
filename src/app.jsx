import React, { useState } from "react";

import Users from "./components/users";
import api from "./api";

const App = () => {
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
    <div>
      <Users
        handleDelete={handleDelete}
        renderPhrase={renderPhrase}
        users={users}
      />
    </div>
  );
};

export default App;
