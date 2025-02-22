import { useEffect, useState } from "react";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
import axios from "axios";
import useTasks from "../../../Hooks/useTasks";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const COLUMNS = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];
export default function TodoList() {
  const [task] = useTasks();
  const [tasks, setTasks] = useState([]);
  
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    setTasks(task);
  }, [task]);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    axiosPublic
      .patch(`/taskList?taskId=${taskId}&newStatus=${newStatus}`)
      .then((res) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task
          )
        );
      });
  }

  return (
    <>
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
