import { useQuery } from "@tanstack/react-query"
import api from "../api"
import { authStore } from "../stores/auth"

const getAuthenticatedUser = async () => {
    let { user } = authStore.getState()
    const { token, authenticate } = authStore.getState()

    if (token && user === null) {
        const response = await api.auth.getMe()
        authenticate(response.data.data)
        user = authStore.getState().user
    }

    return user
}

const useAuth = () => {
    const { data: user, isLoading, refetch } = useQuery(["auth"], getAuthenticatedUser)

    return { user, isLoading, refetch }
}

export default useAuth
