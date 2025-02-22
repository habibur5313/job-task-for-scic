import { useEffect } from "react";
import TodoList from "./TaskManagement/TodoList";

const Home = () => {
    useEffect(() => {
      document.title = "Home | Task Manage ";
    }, []);
  return (
    <div>
      <TodoList></TodoList>
    </div>
  );
};

export default Home;
