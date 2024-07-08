import { get, post } from "./api-service";

export const getComplaints = async () => {
  return await get("/complaints/");
};

export const sendComplaint = async (data) => {
  return await post("/complaints/", data);
};
