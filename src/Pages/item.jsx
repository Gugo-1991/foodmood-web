import { useParams } from "react-router";
import { useGetItemByIdQuery } from "../api/itemsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import ReactStars from "react-stars";
import * as Icon from "react-bootstrap-icons";

const ItemPage = () => {
  const { id } = useParams();
  const { data } = useGetItemByIdQuery(id ?? skipToken, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className=" w-100  my-5 d-flex justify-content-center ">
      <div className="border-0 position-relative flex-row d-flex mb-2 ">
        <img src={data?.src} height="500px" width="400px" alt="" />
        <div className="w-50 text-left mt-5 ms-5">
          <h3>{data?.name ?? ""}</h3>
          <ReactStars
            count={5}
            size={24}
            color="gray"
            a11y={true}
            edit={true}
            isHalf={true}
            value={4}
            activeColor="#ffd700"
          />
          <hr />
          <div className="price-new mb-0">
            <span>{data?.price}$</span>
          </div>
          <div className="price-old">
            <span>{!data?.oldPrice ? "" : data?.oldPrice}</span>
          </div>
          <hr />
          <p>{data?.description}</p>
          <div className="mt-5 btnGroup d-flex justify-content-center mb-3 position-absolute">
            <button
              className="btn btn-dark wish me-3"
              size="sm"
              id={data?._id}
              name={data?.name}
              //   onClick={(e) => handleToWish(e, currentItem)}
              //   disabled={currentItem.isAddedToWishlist}
            >
              <Icon.Heart color={data?.isAddedToWishlist ? "red" : "white"} />
            </button>
            <button
              className="btn btn-dark"
              size="sm"
              //   onClick={(e) => addToCart(e, currentItem, currentItem.id)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
