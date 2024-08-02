import { useGetAllItemsQuery } from "../api/itemsApi";
import Card from "../components/Card/card ";

const Products = () => {
  const { data } = useGetAllItemsQuery();

  return (
    <div className="container ">
      <div className=" row">
        {Array.isArray(data)
          ? data.map((card) => {
              return (
                  <div className="col-sm-5" key={card._id}>
                    <Card key={card._id} card={card} />
                  </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Products;
