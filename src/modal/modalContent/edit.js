import { Modal } from "react-responsive-modal";
import React, { Fragment, useState } from "react";
import "react-responsive-modal/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/showmodal";
import { editCard } from "../../store/foods";
import "./index.css";
function EditMidal() {
  const [editModalOpen, setOpen] = useState(true);

  const closeEditModal = () => setOpen(false);
  const dispatch = useDispatch();

  const item = useSelector(function (state) {
    return state.foods.foods.find((e) => {
      return e.checked === true;
    });
  });

  const [newName, setNewName] = useState(item.name);
  const [newPrice, setNewPrice] = useState(item.price);
  const [newimg, setNewimg] = useState(item.img);
  const [change, setChange] = useState(true);

  const editItem = {
    name: newName,
    price: newPrice,
    img: newimg,
  };

  return (
    <Modal
      open={editModalOpen}
      onClose={() => {
        closeEditModal();
        dispatch(closeModal());
      }}
      center
      classNames={{
        modal: "rounded-3",
        overlayAnimationIn: "customEnterOverlayAnimation",
        overlayAnimationOut: "customLeaveOverlayAnimation",
        modalAnimationIn: "customEnterModalAnimation",
        modalAnimationOut: "customLeaveModalAnimation",
      }}
      animationDuration={800}
    >
      <>
        {change ? (
          <div className="editdiv">
            <h3>EDIT CARD</h3>
            <label>Name</label>

            <input
              value={newName}
              id="login"
              className="form-control"
              onChange={(e) => setNewName(e.target.value)}
            />
            <label>Price</label>
            <input
              value={newPrice}
              // placeholder={item[0].price}
              className="form-control"
              type="number"
              onChange={(e) => setNewPrice(e.target.value)}
            />
            <label>Img URL</label>
            <input
              value={newimg}
              // placeholder={item[0].img}
              className="form-control"
              onChange={(e) => setNewimg(e.target.value)}
            />
            <hr></hr>
            <button
              className="btn btn-warning"
              onClick={() => setChange(false)}
            >
              Edit
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center   ">
            <hr></hr>
            <h5 className="text-danger">Are you sure? </h5>
            <h5>You want to change card?</h5>
         <div className="d-flex  justify-content-center" >
         <h6>Name : {newName} </h6>
            <h6>Price : {newPrice} </h6>

         </div>
            <div className="changefood">
              <button
                className="yes rounded-3"
                onClick={() => {
                  dispatch(editCard(editItem, item._id));
                  dispatch(closeModal());
                }}
              >
                Yes
              </button>
              <button className="no rounded-3" onClick={() => setChange(true)}>
                No
              </button>
            </div>
          </div>
        )}
      </>
    </Modal>
  );
}

export default EditMidal;
