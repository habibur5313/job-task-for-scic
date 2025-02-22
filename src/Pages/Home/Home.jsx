import AddLists from "./TaskManagement/AddLists";
import TodoList from "./TaskManagement/TodoList";

const Home = () => {
  return (
    <div>
      <AddLists></AddLists>
      {/* <TodoList></TodoList> */}
      <TodoList></TodoList>
    </div>
  );
};

export default Home;
