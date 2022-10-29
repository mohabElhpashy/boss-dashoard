import { SERVICE_USER } from '../StatckKeys';

export const isAuth = () => {
  let item = JSON.parse(localStorage.getItem(SERVICE_USER));

  if (item) {
    return true;
  } else {
    return false;
  }
};
