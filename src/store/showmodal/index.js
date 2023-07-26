import {
  CLOSE_MODAL,
  SHOW_MODAL,
  SHOW_ADD_USERS,
  SHOW_SIGN_IN,
  SHOW_LOGIN_MODAL,
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
