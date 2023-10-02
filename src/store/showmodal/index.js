import {
  SHOW_EDIT_MODAL,
  CLOSE_MODAL,
  SHOW_MODAL,
  SHOW_ADD_USERS,
  SHOW_LOGIN_MODAL,
  SHOW_SIGN_UP,
  ALL_USERS,
  ALL_ITEMS,
  BALANCE,
} from "./type";

export const modalIsShow = () => {
  return {
    type: SHOW_MODAL,
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
export const showAddUsersModal = () => {
  return {
    type: SHOW_ADD_USERS,
  };
};
export const showSignUpModal = () => {
  return {
    type: SHOW_SIGN_UP,
  };
};
export const showLoginModal = () => {
  return {
    type: SHOW_LOGIN_MODAL,
  };
};
export const showEditModal = () => {
  return {
    type: SHOW_EDIT_MODAL,
  };
};
export const showAllUsersModal = () => {
  return {
    type: ALL_USERS,
  };
};
export const showAllItems = () => {
  return {
    type: ALL_ITEMS,
  };
};
export const showBalanceModal = () => {
  return {
    type: BALANCE,
  };
};
