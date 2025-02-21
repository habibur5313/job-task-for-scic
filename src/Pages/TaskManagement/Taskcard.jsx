import React from "react";
import { Droppable } from "react-beautiful-dnd";

const Taskcard = ({ groupedTasks }) => {
  console.log(groupedTasks);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center">Todo</h1>
        
        {groupedTasks.todo.map((task) => (
          <Droppable droppableId={task._id}  key={task._id}>
          <div>
            <h1 className="text-2xl font-medium p-5 bg-black rounded-xl text-purple-600 border mt-4">
              {task.title}
            </h1>
          </div>
        </Droppable>
        ))}
      </div>
    </div>
  );
};

export default Taskcard;
