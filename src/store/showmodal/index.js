import { CLOSE_MODAL, SHOW_MODAL, SHOW_ADD_USERS, SHOW_SIGN_IN } from "./type";

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
