import {
  CLOSE_MODAL,
  SHOW_MODAL,
  SHOW_ADD_USERS,
  SHOW_SIGN_IN,
  SHOW_LOGIN_MODAL,
  SHOW_EDIT_MODAL,
} from "./type";

const modal = {
  showmodal: false,
  showAddUsersModal: false,
  showSignInNewUser: false,
  showLoginModal: true,
  showEditModal: false,
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
        showAddUsersModal: false,
        showSignInNewUser: false,
        showLoginModal: false,
        showEditModal: false,
      };
    case SHOW_ADD_USERS:
      return {
        ...state,
        showAddusersModal: !modal.showAddUsersModal,
      };
    case SHOW_SIGN_IN:
      return {
        ...state,
        showSignInNewUser: !modal.showSignInNewUser,
      };
    case SHOW_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: true,
      };
    case SHOW_EDIT_MODAL:
      return {
        ...state,
        showEditModal: true,
      };

    default:
      return state;
  }
};

export default showModalReduser;
