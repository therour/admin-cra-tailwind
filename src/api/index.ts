import { AxiosRequestConfig } from "axios";
import { AuthUser } from "../types";
import request from "./request";

interface GetMeResponse {
  data: AuthUser;
}

interface LoginResponse {
  data: AuthUser;
  token: string;
}

const api = {
  auth: {
    login(email: string, password: string, config?: AxiosRequestConfig) {
      return request.post<LoginResponse>(
        "/v1/auth/login",
        { email, password },
        config
      );
    },

    getMe(config?: AxiosRequestConfig) {
      return request.get<GetMeResponse>("/v1/auth/me", config);
    },
  },
};

export default api;
