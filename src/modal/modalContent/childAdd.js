function AddCardForAdminModal() {
  return (
    <>
      <div className="general">
        <div className="card rounded-3">
          <input
            required
            placeholder=" type name..."
            onChange={(e) => setNAme(e.target.value)}
            className="cardinput rounded-3"
            type="text"
          />
          <input
            required
            onChange={(e) => setPrice(e.target.value)}
            className="cardinput rounded-3"
            placeholder=" type price..."
            type="number"
          />
          <input
            required
            onChange={(e) => setImg(e.target.value)}
            className="cardinput rounded-3"
            placeholder=" create img url..."
            type="text"
          />
          <div className="button">
            <button
              onClick={() =>
                name && price
                  ? dispatch(addFood({ name, price, img })) &&
                    dispatch(closeModal())
                  : alert("fill in")
              }
              type="button"
              className="btn btn-outline-dark">
              Add
            </button>
            <button
              onClick={() => dispatch(closeModal())}
              type="button"
              className="btn btn-outline-danger">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCardForAdminModal;
