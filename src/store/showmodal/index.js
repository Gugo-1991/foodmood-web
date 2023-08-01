import {
  SHOW_EDIT_MODAL,
  CLOSE_MODAL,
  SHOW_MODAL,
  SHOW_ADD_USERS,
  SHOW_SIGN_IN,
  SHOW_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
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
export const showSigninModal = () => {
  return {
    type: SHOW_SIGN_IN,
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
export const closeLoginModal = () => {
  return {
    type: CLOSE_LOGIN_MODAL,
  };
};
