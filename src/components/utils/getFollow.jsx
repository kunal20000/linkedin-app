import axios from "axios";
import { getAuthHeaderConfig, getHeaderWithProjectId } from "./config";

export const followUser = async (id) => {
  const headers = getAuthHeaderConfig();

  try {
    const res = await axios.post(
      `https://academics.newtonschool.co/api/v1/linkedin/follow/${id}`,
      {},
      headers
    );

    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const unfollowUser = async (id) => {
  const headers = getAuthHeaderConfig();

  try {
    const res = await axios.delete(
      `https://academics.newtonschool.co/api/v1/linkedin/follow/${id}`,
     
      getAuthHeaderConfig()
    );
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
