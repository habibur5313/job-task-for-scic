import React, { useContext, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTasks from "../../Hooks/useTasks";

const AddLists = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [tasks, refetch] = useTasks();
  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const taskInfo = {
      title,
      description,
      email: user?.email,
      name: user?.displayName,
      time: new Date(),
      list: "todo",
    };

    axiosPublic.post("/tasks", taskInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "task added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setOpen(false);
        refetch();
      }
    });
  };
  return (
    <div>
      {tasks.length > 0 ? (
        <div className="flex justify-end mb-5 mr-2 lg:mr-10">
          <button
            className="btn bg-green-500 py-1 px-4 text-white"
            onClick={onOpenModal}
          >
            Add Task
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-295px)]">
          <button
            className="btn bg-green-500 py-1 px-4 text-white"
            onClick={onOpenModal}
          >
            Add Task
          </button>
        </div>
      )}
      <Modal open={open} onClose={onCloseModal} center>
        <form onSubmit={handleAddTask}>
          <div className="form-control">
            <label className="label">
              <span className="label-text ml-4">List title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="enter list title"
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
              placeholder="description"
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
    </div>
  );
};

export default AddLists;
