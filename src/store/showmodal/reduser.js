import { CLOSE_MODAL, SHOW_MODAL } from "./type";

const modal = {
  showmodal: false,
};

const showModalReduser = (state = modal, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showmodal: !modal.showmodal,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showmodal: false,
      };
    default:
      return state;
  }
};

export default showModalReduser;
