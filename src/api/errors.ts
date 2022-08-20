import Axios, { AxiosError, AxiosResponse } from "axios";

interface ApiErrorPayload {
  message: string;
}

interface ValidationError extends ApiErrorPayload {
  errors: any;
}

export function isApiValidationError<D extends object>(
  payload: any
): payload is ApiError<ValidationError> {
  return payload.response?.status === 422;
}

function isAxiosError(payload: any): payload is AxiosError<ApiErrorPayload> {
  return Axios.isAxiosError(payload);
}

interface ApiError<T extends ApiErrorPayload>
  extends Omit<AxiosError, "response"> {
  response: NonNullable<AxiosResponse<T>>;
}

export function isApiError(err: any): err is ApiError<ApiErrorPayload> {
  return isAxiosError(err) && Boolean(err.response);
}
