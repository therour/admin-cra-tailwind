import Axios from "axios"
import { toast } from "react-toastify"
import { authStore } from "../stores/auth"
import { isApiError } from "./errors"

const request = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        accept: "application/json",
        "Content-Type": "application/json",
    },
})

request.interceptors.request.use((config) => {
    const { token } = authStore.getState()
    if (token) {
        config.headers = Object.assign(config.headers || {}, {
            Authorization: `Bearer ${token}`,
        })
    }

    return config
})

request.interceptors.response.use(
    (res) => res,
    (err) => {
        if (isApiError(err) && err.response.status === 401) {
            authStore.getState().clearAuthentication()
            toast(err.response.data.message)
            return
        }

        return err
    },
)

export default request
