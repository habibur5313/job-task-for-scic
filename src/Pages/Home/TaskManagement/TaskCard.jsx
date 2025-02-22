import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useTasks from "../../../Hooks/useTasks";

const TaskCard = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  const [, refetch] = useTasks();
  const axiosPublic = useAxiosPublic();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleDelete = (id) => {

    //       Swal.fire({
    //         title: "Do you want to save the changes?",
    //         showDenyButton: true,
    //         showCancelButton: true,
    //         confirmButtonText: "delete",
    //         denyButtonText: `Don't delete`,
    //       }).then((result) => {
    //         /* Read more about isConfirmed, isDenied below */
    //         if (result.isConfirmed) {
    //           axiosPublic.delete(`/tasks/${task._id}`).then((res) => {
    //             if (res.data.deletedCount > 0) {
    //               Swal.fire("Deleted successfully");
    //               refetch();
    //             }
    //           });
    //         } else if (result.isDenied) {
    //           Swal.fire("Changes are not saved", "", "info");
    //         }
    //       });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const taskInfo = {
      title,
      description,
      email: task.email,
      name: task.name,
      time: task.time,
      list: task.list,
    };

    axiosPublic.patch(`/tasks/${task._id}`, taskInfo).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "task updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setOpen(false);
        refetch();
      }
    });
  };
  return (
    <>
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
        style={style}
      >
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-neutral-100">{task.title}</h3>
          <div className="flex gap-3 text-4xl font-semibold">
            <button className="text-white" onClick={onOpenModal}>
              <CiEdit />
            </button>
            <button className="text-red-600" onClick={() => handleDelete("hello")}>
              <MdDeleteForever />
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm text-neutral-400">{task.description}</p>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <form onSubmit={handleUpdate}>
          <div className="form-control">
            <label className="label">
              <span className="label-text ml-4">List title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={task.title}
              className="input input-bordered mx-5"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ml-4">Description</span>
            </label>
            <textarea
              name="description"
              type="text"
              defaultValue={task.description}
              className="input input-bordered mx-5"
            ></textarea>
          </div>
          <div className="flex justify-end mt-4">
            <button className="btn bg-orange-400 text-white text-xl font-medium">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default TaskCard;
