import create from "zustand/vanilla"
import createHooks from "zustand"
import { subscribeWithSelector } from "zustand/middleware"
import { AuthUser } from "../types"

const AUTH_TOKEN_STORAGE_KEY = "token"

interface AuthState {
    user: AuthUser | null
    token: string | null
    authenticating: boolean
    authenticateWithToken: (user: AuthUser, token: string) => void
    authenticate: (user: AuthUser) => void
    clearAuthentication: () => void
}

export const authStore = create<AuthState>()(
    subscribeWithSelector((set) => ({
        user: null,
        token: localStorage.getItem(AUTH_TOKEN_STORAGE_KEY),
        authenticating: false,
        authenticateWithToken: (user: AuthUser, token: string) => {
            localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token)
            set({ user, token })
        },
        authenticate: (user: AuthUser) => {
            set({ user })
        },
        clearAuthentication: () => {
            set({ user: null, token: null, authenticating: false })
            localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
        },
    })),
)

export const useAuthStore = createHooks(authStore)
