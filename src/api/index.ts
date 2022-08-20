import Axios from "axios";
import { AuthUser } from "../types";

const request = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

interface GetMeResponse {
  data: AuthUser;
}

const api = {
  auth: {
    getMe() {
      return request.get<GetMeResponse>("/v1/auth/me");
    },
  },
};

export default api;
