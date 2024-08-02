import React from "react";
import "./index.css";
import Delete from "../../utils/trash";
import Edit from "../../utils/Pen";
import {
  useDeleteCardModal,
  useEditCardModal,
} from "../../context/modal/useModals";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const editCard = useEditCardModal({});
  const deleteCard = useDeleteCardModal({});
  const { src, name, price, oldPrice, description,_id } = card;
  const isAdmin = JSON.parse(localStorage.getItem("x-user"))?.role === "admin";

  return (
    <main>
      <div
        className="container-fluid bg-transparent my-4 p-3 "
        style={{ position: "relative" }}
      >
        <div className=" row">
          <div className="col">
            <div className="card h-100 shadow-sm">
              {isAdmin ? (
                <div className="actions align-items-center  ">
                  <Delete
                    onClick={() => deleteCard.attachHandler({ ...card })}
                  />
                  <Edit onClick={() => editCard.attachHandler({ ...card })} />
                </div>
              ) : null}
             <Link  to={`/item/${_id}`}>
             
             <img src={src ?? ""} className="card-img-top" alt="..." />
             </Link>

              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-primary">
                    {name ?? ""}
                  </span>
                  <span className="price-old float-end  ms-3">
                    {oldPrice ?? ""}$
                  </span>

                  <span className="float-end price-hp">{price ?? ""}$</span>
                </div>
                <h5 className="card-title">
                  {description ?? "loremfefefefefefefefefefefe"}
                </h5>
                <div className="text-center my-4">
                  <a aria-hidden href="/" className="btn btn-warning">
                    Check offer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
