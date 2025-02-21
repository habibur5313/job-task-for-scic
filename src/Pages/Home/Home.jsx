import React, { useContext } from "react";
import Banner from "./Banner";
import Swapy from "../TaskManagement/Swapy";
import TodoList from "../TaskManagement/TodoList";
import { AuthContext } from "../../Provider/AuthProvider";
import useTasks from "../../Hooks/useTasks";
import AddLists from "../TaskManagement/AddLists";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [tasks] = useTasks();
  console.log(tasks.length);

  return (
    <div>
<TodoList></TodoList>
<AddLists></AddLists>

    </div>
  );
};

export default Home;
