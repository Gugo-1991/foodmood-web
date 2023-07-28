import { useDispatch, useSelector } from "react-redux";
import { editCard } from "../../store/foods";
import { useState } from "react";
import { closeModal } from "../../store/showmodal";
import "./index.css";
function EditModal() {
  const dispatch = useDispatch();

  const [{ name, price, img, id }] = useSelector(function (state) {
    return state.foods.foods.filter((e) => {
      return e.checked === true;
    });
  });
  const [newname, setNewname] = useState("");
  const [newprice, setNewprice] = useState("");
  const [newimg, setNewimg] = useState("");
  const [change, setchange] = useState(true);
  return (
    <>
      {change ? (
        <>
          <input
            defaultValue={name}
            onChange={(e) => setNewname(e.target.value)}
          />
          <input
            type="number"
            defaultValue={price}
            onChange={(e) => setNewprice(e.target.value)}
          />
          <input
            defaultValue={img}
            onChange={(e) => setNewimg(e.target.value)}
          />

          <button className="btn btn-warning" onClick={() => setchange(false)}>
            Edit
          </button>
        </>
      ) : (
        <div className="main">
          <h5>are you sure? you you want to change card?</h5>
          <h6>name : {newname ? newname : name}</h6>
          <h6>price : {newprice ? newprice : price}</h6>
          <div class="search_page_item">
            <div id="description"></div>
          </div>

          {/* <div className="h6">imgurl : {newimg ? newimg : img}</div> */}
          <div className="changefood">
            <button
              className="yes"
              onClick={() =>
                dispatch(
                  editCard({
                    newname: newname ? newname : name,
                    newprice: newprice ? newprice : price,
                    newimg: newimg ? newimg : img,
                    id,
                  })
                ) && dispatch(closeModal())
              }>
              Yes
            </button>
            <button className="no" onClick={() => dispatch(closeModal())}>
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default EditModal;
