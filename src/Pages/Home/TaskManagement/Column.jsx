import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';
 // updated import to align with default export

const Column = ({ column, tasks, refetch}) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex flex-col rounded-lg bg-neutral-800 p-4">
      <h2 className="mb-4 font-semibold text-neutral-100 text-2xl text-center border-b-2 pb-2">{column.title}</h2>
      <div ref={setNodeRef} key={column.id} className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} refetch={refetch}/>
        ))}
      </div>
    </div>
  );
};

export default Column;
