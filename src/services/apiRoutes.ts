import API from "./api";

export const getProfileInfo = () => API.get("/profile");
export const getRewardsList = () => API.get("/rewards");
