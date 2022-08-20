import Axios, { AxiosError, AxiosResponse } from "axios"

type Any = any // eslint-disable-line @typescript-eslint/no-explicit-any

interface ApiErrorPayload {
    message: string
}

interface ValidationError extends ApiErrorPayload {
    errors: Any
}

export function isApiValidationError(payload: Any): payload is ApiError<ValidationError> {
    return payload.response?.status === 422
}

// eslint-disable-line @typescript-eslint/no-explicit-any
function isAxiosError(payload: Any): payload is AxiosError<ApiErrorPayload> {
    return Axios.isAxiosError(payload)
}

interface ApiError<T extends ApiErrorPayload> extends Omit<AxiosError, "response"> {
    response: NonNullable<AxiosResponse<T>>
}

export function isApiError(err: Any): err is ApiError<ApiErrorPayload> {
    return isAxiosError(err) && Boolean(err.response)
}
