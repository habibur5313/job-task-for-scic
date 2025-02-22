import { useContext, useState } from "react";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import AddLists from "./AddLists";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const COLUMNS = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];
const TodoList = () => {
  const axiosPublic = useAxiosPublic();
  const [tasks,setTasks] = useState([])
  const {user} = useContext(AuthContext)
  const { data, refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${user?.email}`);
      setTasks(res.data)
      return res.data;
    },
  });

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    axiosPublic
      .patch(`/taskList?taskId=${taskId}&newStatus=${newStatus}`)
  }

  return (
    <>
      <AddLists tasks={tasks} refetch={refetch}></AddLists>
      {tasks.length > 0 && (
        <div className="p-4 min-h-[calc(100vh-365px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <DndContext onDragEnd={handleDragEnd}>
              {COLUMNS.map((column) => (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks.filter((task) => task.status === column.id)}
                />
              ))}
            </DndContext>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoList