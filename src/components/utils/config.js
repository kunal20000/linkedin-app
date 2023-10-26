import axios from "axios";

const PROJECT_ID = "hv45l4abtvvc";

export const getHeaderWithProjectId = () => {
  return {
    headers: { projectId: PROJECT_ID },
  };
};

export const getHeaderWithProjectIDAndBody = () => {
  return {
    headers: { projectId: PROJECT_ID, "Content-Type": "application/json" },
  };
};
export const getProfileById = async (id) => {
  const headers = getHeaderWithProjectId();
  const authConfig = getAuthHeaderConfig();
  try {
    const res = await axios.get(
      `https://academics.newtonschool.co/api/v1/linkedin/user/${id}`,
      authConfig,
      headers
     
    );
    return res.data.data;
  } catch (error) {
    return error;
  }
};
export const getAuthHeaderConfig = () => {
  const token = sessionStorage.getItem("authToken");
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: PROJECT_ID,
      },
    };
  } else {
    return {
      error: "user not logged in",
    };
  }
};
