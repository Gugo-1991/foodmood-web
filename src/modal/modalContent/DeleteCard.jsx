import { useDeleteItemMutation } from "../../api/itemsApi";
import CustomModal from "../../context/modal/CustomModal";
import Button from "../../shared/Button";

const DeleteCard = ({ open, modalHandler, item }) => {
  const [deleteCard] = useDeleteItemMutation()
  console.log(item);

const deleteHandler =(_id)=>{
  deleteCard(_id)
  modalHandler()
}


  return (
    <CustomModal open={open} modalHandler={modalHandler}>
      <div className="bg-secondary d-flex justify-content-center ">
        <div className=" d-flex align-items-center flex-column  p-5">
          <h3>DELETE CATD</h3>

          <h3 className="text-danger">Are you sure ?</h3>
          <hr />

          <h4> Do you want to delete this card?</h4>
          <h3 className="text-warning">{item.name}</h3>
          <hr />

          <div className="btn-group">
            <Button label={"YES"} className="btn-outline-danger" onClick={()=>deleteHandler(item._id)} />
            <Button label={"NO"} onClick={modalHandler} />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default DeleteCard;
