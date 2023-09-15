import {
  CLOSE_MODAL,
  SHOW_MODAL,
  SHOW_ADD_USERS,
  SHOW_SIGN_UP,
  SHOW_LOGIN_MODAL,
  SHOW_EDIT_MODAL,
} from "./type";

const modal = {
  showmodal: false,
  showAddUsersModal: false,
  showSignUpNewUser: false,
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
        showSignUpNewUser: false,
        showLoginModal: false,
        showEditModal: false,
      };

    case SHOW_ADD_USERS:
      return {
        showmodal: false,
        showAddUsersModal: true,
        showSignUpNewUser: false,
        showLoginModal: false,
        showEditModal: false,
      };
    case SHOW_SIGN_UP:
      return {
        ...state,
        showSignUpNewUser: !modal.showSignUpNewUser,
      };
    case SHOW_LOGIN_MODAL:
      return {
        showmodal: false,
        showAddUsersModal: false,
        showSignUpNewUser: false,
        showLoginModal: true,
        showEditModal: false,
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
