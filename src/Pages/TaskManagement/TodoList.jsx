// App.js
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import Taskcard from "./Taskcard";

const TodoList = () => {
  
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((response) => {
      setTasks(response.data);
    });
  }, [tasks]);
  

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
    setTasks(updatedTasks);
  };

  // // Group tasks by list
  const groupedTasks = {
    todo: tasks.filter((task) => task.list === "todo"),
    inProgress: tasks.filter((task) => task.list === "inProgress"),
    done: tasks.filter((task) => task.list === "done"),
  };
  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(groupedTasks).map(([listId, tasks]) => (         
          <Droppable droppableId={listId} key={listId}  isDropDisabled={false} isCombineEnabled={false} ignoreContainerClipping={false}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "20px"
                }}
              >
                <h2>{listId}</h2>
                {tasks.map((task, index) => (
                  <Draggable key={task._id} draggableId={task._id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          padding: "10px",
                          margin: "5px",
                          backgroundColor: "#f4f4f4",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {task.title} <br /> {task.description}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
        {/* <Taskcard groupedTasks={groupedTasks}></Taskcard> */}
      </div>
    </DragDropContext>
    // <></>
  );
};

export default TodoList;
