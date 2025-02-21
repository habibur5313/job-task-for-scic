import React, { useContext, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";

const AddLists = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
const axiosPublic = useAxiosPublic()
const {user} = useContext(AuthContext)

  const handleAddCoupon = (e) => {
    e.preventDefault();
    const couponCode = e.target.couponCode.value;
    const discountPercentage = parseInt(e.target.discountPercentage.value);
    const couponDescription = e.target.couponDescription.value;
    const couponInfo = {
      couponCode,
      discountPercentage,
      couponDescription,
    };
    axiosPublic.post("/couponCodes", couponInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Coupon code added successfully",
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
      <button
        className="btn bg-green-500 py-1 px-4 text-white"
        onClick={onOpenModal}
      >
        Add Coupon
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <form onSubmit={handleAddCoupon}>
          <div className="form-control">
            <label className="label">
              <span className="label-text ml-4">coupon code</span>
            </label>
            <input
              type="text"
              name="couponCode"
              placeholder="enter coupon code"
              className="input input-bordered mx-5"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ml-4">discount percentage</span>
            </label>
            <input
              type="number"
              name="discountPercentage"
              placeholder="enter discount percentage"
              className="input input-bordered mx-5"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ml-4">coupon description</span>
            </label>
            <textarea
              name="couponDescription"
              type="text"
              placeholder=" coupon description"
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
