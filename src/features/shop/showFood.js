import { useGetAllItemsQuery } from "../../api/itemsApi";
import Card from "./cardCreator";
import "./index.css";

const Showfood = () => {
  const { data } = useGetAllItemsQuery();
  return (
    <div className="bg d-grid vh-100">
      <div className="page p-3 d-grid ">


        {Array.isArray(data)
          ? data.map((card) => {
              return <Card key={card._id} card={card} />;
            })
          : null}
      </div>
    </div>
  );
};
export default Showfood;
