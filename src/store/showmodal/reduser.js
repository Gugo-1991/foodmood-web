import { CLOSE_MODAL, SHOW_MODAL, SHOW_ADD_USERS } from "./type";

const modal = {
  showmodal: false,
  showAddusersModal: true,
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
        showAddusersModal: false,
      };
    case SHOW_ADD_USERS:
      return {
        ...state,
        showAddusersModal: !modal.showAddusersModal,
      };

    default:
      return state;
  }
};

export default showModalReduser;
