import { useSelector } from "react-redux";
import "./showFood/index.css";
import ContentCreator from "./showFood/contentCreator";

function Showfood() {
  const foods = useSelector(function (state) {
    return state.foods.foods;
  });
  return (
    <>
      <div className="bg d-grid vh-100">
        <div className="page p-3 d-grid ">
          {foods.map((e) => {
            return (
              <ContentCreator
                _id={e._id}
                name={e.name}
                img={e.img}
                price={e.price}
                checked={e.checked}></ContentCreator>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Showfood;
