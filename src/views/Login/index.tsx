import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import api from "../../api"
import { isApiError, isApiValidationError } from "../../api/errors"
import { Button } from "../../components/buttons"
import { InputField } from "../../components/forms"
import { useAbortController, useAuth } from "../../hooks"
import { useAuthStore } from "../../stores/auth"

type LoginFormValues = {
    email: string
    password: string
}

const Login = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<LoginFormValues>()
    const { refetch: revalidateAuthentication } = useAuth()
    const authenticateWithToken = useAuthStore((s) => s.authenticateWithToken)
    const [submitting, setSubmitting] = useState(false)
    const abortController = useAbortController()

    const onSubmit = handleSubmit(async (data) => {
        try {
            setSubmitting(true)
            const signal = abortController.createSignal()
            const response = await api.auth.login(data.email, data.password, {
                signal: signal,
            })
            const { data: user, token } = response.data
            authenticateWithToken(user, token)
            revalidateAuthentication()
        } catch (err) {
            if (isApiError(err)) {
                if (isApiValidationError(err)) {
                    const errors = err.response.data.errors
                    Object.keys(errors).forEach((key, index) => {
                        setError(key as never, { type: "api", message: errors[key] }, { shouldFocus: index === 0 })
                    })
                } else {
                    toast.error(err.response.data.message)
                }
            } else {
                toast.error("Something wrong!")
                throw err
            }
        } finally {
            setSubmitting(false)
        }
    })

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="h-full bg-white flex">
                <form
                    onSubmit={onSubmit}
                    className="w-2/3 min-w-[320px] max-w-[420px] shadow-2xl rounded-lg p-6 border m-auto mt-12 sm:mt-20 md:mt-auto"
                >
                    <h1 className="text-2xl mb-12">Hi, Welcome Back 😃</h1>

                    <div className="flex flex-col gap-6">
                        <InputField
                            label="E-Mail Address"
                            type="email"
                            autoComplete="email"
                            {...register("email", { required: true })}
                            isError={Boolean(errors.email)}
                            errorMessage={errors.email?.message}
                        />
                        <InputField
                            label="Password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                            isError={Boolean(errors.password)}
                            errorMessage={errors.password?.message}
                        />

                        <Button type="submit" color="primary" className="w-full mt-8" disabled={submitting}>
                            {submitting ? "Submitting..." : "Login"}
                        </Button>
                    </div>
                </form>
            </div>
            <div className="h-full bg-black hidden md:block"></div>
        </div>
    )
}

export default Login
