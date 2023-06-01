export const BASE_URL = process.env.REACT_APP_BACKEND_URL_LIVE;
export const API_END_POINTS = {
  login: BASE_URL + "auth/login",
  logout: BASE_URL + "auth/logout",
  updateProfile: BASE_URL + "auth/update-profile",
  updatePassword: BASE_URL + "auth/update-password",
  adddiary: BASE_URL + "add-diary",
  diarylist: BASE_URL + "diary-list",
  deletediary: BASE_URL + "diary-delete",
  managerList: BASE_URL + "manager-list",
}; 