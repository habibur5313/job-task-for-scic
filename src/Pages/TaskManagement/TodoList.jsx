// App.js
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import ListCard from "./ListCard";
import useTasks from "../../Hooks/useTasks";

const TodoList = () => {
  
const [tasks] = useTasks()

  

  // Handle drag-and-drop
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
console.log(destination);

    if (!destination) return;

    // Update task list in the backend
    axios.put(`http://localhost:5000/tasks/${draggableId}`, {
      list: destination.droppableId,
    });

    // Update task list in the frontend
    const updatedTasks = tasks.map((task) => {
      if (task._id === draggableId) {
        return { ...task, list: destination.droppableId };
      }
      return task;
    });
    // setTasks(updatedTasks);
  };

  // // Group tasks by list
  const groupedTasks = {
    Todo: tasks.filter((task) => task.list === "todo"),
    InProgress: tasks.filter((task) => task.list === "inProgress"),
    Done: tasks.filter((task) => task.list === "done"),
  };
  

  return (
    <>
    {tasks.length > 0 && <DragDropContext onDragEnd={onDragEnd}>
    <div className="min-h-[calc(100vh-365px)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {Object.entries(groupedTasks).map(([listId, tasks]) => (         
          <Droppable droppableId={listId} key={listId}  isDropDisabled={false} isCombineEnabled={false} ignoreContainerClipping={false}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="border shadow-xl bg-gray-300 p-4  rounded-xl"
              >
                <h2 className="text-2xl font-semibold text-center mb-4">{listId}</h2>
                {tasks.map((task, index) => (
                  <Draggable key={task._id} draggableId={task._id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ListCard task={task}></ListCard>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
      </div>
    </DragDropContext>}
    </>
//     <DragDropContext onDragEnd={onDragEnd}>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// <div className="border shadow-xl bg-gray-300 p-4 rounded-xl">
//   {groupedTasks.todo.map(task => <ListCard key={task._id} task={task}></ListCard>)}
// </div>
// <div className="border shadow-xl bg-gray-300 p-4 rounded-xl">
//   {groupedTasks.inProgress.map(task => <ListCard key={task._id} task={task}></ListCard>)}
// </div>
// <div className="border shadow-xl bg-gray-300 p-4 rounded-xl">
//   {groupedTasks.done.map(task => <ListCard key={task._id} task={task}></ListCard>)}
// </div>
//     </div>
//     </DragDropContext>
  );
};

export default TodoList;
