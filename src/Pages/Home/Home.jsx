import React, { useContext } from "react";
import TodoList from "../TaskManagement/TodoList";
import AddLists from "../TaskManagement/AddLists";

const Home = () => {
  return (
    <div>
      <AddLists></AddLists>
      <TodoList></TodoList>
    </div>
  );
};

export default Home;
