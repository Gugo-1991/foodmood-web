import {
  CLOSE_MODAL,
  SHOW_MODAL,
  SHOW_ADD_USERS,
  SHOW_SIGN_UP,
  SHOW_LOGIN_MODAL,
  SHOW_EDIT_MODAL,
  ALL_USERS,
  ALL_ITEMS,
} from "./type";

const modal = {
  showAllItems: false,
  showAllUsers: false,
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
        showAllUsers: false,
        showAllItems: false,
        showmodal: false,
        showAddUsersModal: false,
        showSignUpNewUser: false,
        showLoginModal: false,
        showEditModal: false,
      };

    case SHOW_ADD_USERS:
      return {
        showAllUsers: false,
        showmodal: false,
        showAllItems: false,
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
        showAllUsers: false,
        showmodal: false,
        showAllItems: false,
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
    case ALL_USERS:
      return {
        showmodal: false,
        showAllItems: false,
        showAllUsers: true,
        showAddUsersModal: false,
        showSignUpNewUser: false,
        showLoginModal: false,
        showEditModal: false,
      };
    case ALL_ITEMS:
      return {
        showmodal: false,
        showAllUsers: false,
        showAllItems: true,
        showAddUsersModal: false,
        showSignUpNewUser: false,
        showLoginModal: false,
        showEditModal: false,
      };

    default:
      return state;
  }
};

export default showModalReduser;
