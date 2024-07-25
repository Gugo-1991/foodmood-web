import { useAddCardModal, useAddNewUser } from "../../context/modal/useModals";
import Button from "../../shared/Button";

const AdminTools = () => {
  const addCard = useAddCardModal({});
  const addUser = useAddNewUser({});
  return (
    <>
      <Button
        label="ADD CARD"
        onClick={() => addCard.attachHandler()}
        className=" btn-success"
      />
      <Button
        label="ADD USER"
        onClick={() => addUser.attachHandler()}
        className=" btn-success"
      />
    </>
  );
};

export default AdminTools;
