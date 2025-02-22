import React, { useContext, useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCount from "../../../Hooks/useCount";

const AddLists = ({tasks,refetch}) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const {tasksCount,recall} = useCount()
  
// console.log(tasksCount,tasks.length);
const [titleError,setTitleError] = useState('')
const [desError,setDesError] = useState('')
  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    console.log(title.length,description.length);
    if(title.length > 50){
      setTitleError('title max 50 characters')
    }
    else if(description.length > 200){
      setDesError('Description max 200 characters')
    }
   else{
    const taskInfo = {
      id:  tasksCount + 1,
      title,
      description,
      email: user?.email,
      name: user?.displayName,
      time: new Date(),
      status: "TODO",
    };
    setTitleError('')
    setDesError('')
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
        recall()
      }
    });
   }
  };
  return (
    <div>
      {tasks.length > 0 ? (
        <div className="flex justify-end mb-5 mr-2 lg:mr-10">
          <button
            className="btn py-1 px-4 text-xl font-medium"
            onClick={onOpenModal}
          >
            Add Task
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-295px)]">
          <button
            className="btn  py-1 px-4 text-xl font-medium"
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
            <p className="text-red-600">{titleError}</p>
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
             <p className="text-red-600">{desError}</p>
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
