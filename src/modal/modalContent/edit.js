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
    return state.foods.foods.filter((e) => {
      return e.checked === false;
    });
  });
  console.log("item::" + item.name);
  const [newname, setNewname] = useState("");
  const [newprice, setNewprice] = useState("");
  const [newimg, setNewimg] = useState("");
  const [change, setchange] = useState(true);

  return (
    <Fragment>
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
        animationDuration={800}>
        <>
          {change ? (
            <>
              <div className="editdiv">
                <label>Name</label>
                <input
                  id="login"
                  className="login rounded-3"
                  onChange={(e) => setNewname(e.target.value)}
                />
                <label>Price</label>
                <input
                  className="login rounded-3"
                  type="number"
                  onChange={(e) => setNewprice(e.target.value)}
                />
                <label>Img URL</label>
                <input
                  className="login rounded-3"
                  onChange={(e) => setNewimg(e.target.value)}
                />
                <button
                  className="btn btn-warning"
                  onClick={() => setchange(false)}>
                  Edit
                </button>
              </div>
            </>
          ) : (
            <div className="main">
              <h5>are you sure? you you want to change card?</h5>
              <h6>name : {newname ? newname : null}</h6>
              <h6>price : {newprice ? newprice : null}</h6>
              <div class="search_page_item">
                <div id="description"></div>
              </div>

              <div className="changefood">
                <button
                  className="yes rounded-3"
                  onClick={() => {
                    dispatch(
                      editCard({
                        newname: newname ? newname : null,
                        newprice: newprice ? newprice : null,
                        newimg: newimg ? newimg : null,
                      })
                    );
                    dispatch(closeModal());
                  }}>
                  Yes
                </button>
                <button
                  className="no rounded-3"
                  onClick={() => dispatch(closeModal())}>
                  No
                </button>
              </div>
            </div>
          )}
        </>
      </Modal>
    </Fragment>
  );
}

export default EditMidal;
