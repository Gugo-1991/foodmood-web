import { useSelector } from "react-redux";
import "./showFood/index.css";
import ContentCreator from "./showFood/contentCreator";

function Showfood() {
  const foods = useSelector(function (state) {
    return state.foods.foods;
  });

  return (
    <>
      <div className="page">
        {foods.map((e) => {
          return (
            <ContentCreator
              id={e.id}
              name={e.name}
              img={e.img}
              price={e.price}
              checked={e.checked}></ContentCreator>
          );
        })}
      </div>
    </>
  );
}
export default Showfood;
