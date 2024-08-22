import "../../index.css";
import {
  EnvelopeFill,
  HeartFill,
  PhoneFill,
  BoxArrowInRight,
  BoxArrowInLeft,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function TopHeader() {
  const [CartCounter, setCartCounter] = useState(0);
  const [WishCounter, setWishCounter] = useState(0);
  const xUser = JSON.parse(localStorage.getItem("x-user"));

  return (
    <section className="  bg-black text-white p-1 sticky-top ">
      <div className="d-flex justify-content-around">
        <div className="">
          <span className=" me-5">
            <EnvelopeFill className="me-2" />
            gularyan@gmail.com
          </span>
          <span className="">
            <PhoneFill className="me-2" />
            +374
          </span>
        </div>
        <div className="d-flex">
          <Link className="me-5  text-white" to="/wishList">
            <span>
              <HeartFill className="me-2" />
              Wish List
              <span className="ms-1">({WishCounter})</span>
            </span>
          </Link>
          <Link className="me-5 text-white" to="/shoppingCart">
            <span>
              <HeartFill className="me-2" />
              Shopping Cart
              <span className="ms-1">({CartCounter})</span>
            </span>
          </Link>

          <span
            className="ml-auto "
            aria-hidden
            onClick={() => {
              !!xUser && localStorage.clear("x-user");
              window.location.reload();
            }}
          >
            {xUser ? (
              <>
                <BoxArrowInLeft className="me-1" />
                Logout
              </>
            ) : (
              <>
                <BoxArrowInRight className="me-1" />
                Login
              </>
            )}
          </span>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;