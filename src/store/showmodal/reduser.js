import {
  CLOSE_MODAL,
  SHOW_MODAL,
  SHOW_ADD_USERS,
  SHOW_SIGN_UP,
  SHOW_LOGIN_MODAL,
  SHOW_EDIT_MODAL,
  ALL_USERS,
  ALL_ITEMS,
  BALANCE,
} from "./type";

const modal = {
  showBalanceModal: false,
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
        showBalanceModal: false,
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
        ...state,
        showAddUsersModal: true,
      };
    case SHOW_SIGN_UP:
      return {
        ...state,
        showSignUpNewUser: true,
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
    case ALL_USERS:
      return {
        ...state,
        showAllUsers: true,
      };
    case ALL_ITEMS:
      return {
        ...state,
        showAllItems: true,
      };
    case BALANCE:
      return {
        ...state,
        showBalanceModal: true,
      };

    default:
      return state;
  }
};

export default showModalReduser;
