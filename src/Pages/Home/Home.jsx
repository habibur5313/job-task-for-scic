import React, { useContext } from "react";
// import TodoList from "../TaskManagement/TodoList";
import AddLists from "../TaskManagement/AddLists";
import TodoList from "./TaskManagement/TodoList";
import useTasks from "../../Hooks/useTasks";

const Home = () => {
  const [tasks, setTasks] = useTasks();
  return (
    <div>
      <AddLists></AddLists>
      {/* <TodoList></TodoList> */}
      <TodoList task={tasks}></TodoList>
    </div>
  );
};

export default Home;
