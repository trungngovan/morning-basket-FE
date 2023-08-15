import React, { useEffect, useState } from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { RedirectModal } from '../../components/RedirectModal'
import storefront from '../../assets/store-front.jpg'

const signInFormValidationSchema = zod.object({
    username: zod.string().min(1, 'Vui lòng nhập email hoặc số điện thoại'),
    password: zod.string().min(6, 'Vui lòng nhập mật khẩu'),
})
export type SignInData = zod.infer<typeof signInFormValidationSchema>
type SignInFormData = SignInData
export function SignInPage() {
    const { register, handleSubmit, watch } = useForm<SignInFormData>({
        resolver: zodResolver(signInFormValidationSchema),
    })
    const navigate = useNavigate()
    const { isAuthenticated, signin, signinNotif } = useAuth()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const location = useLocation()

    const handleNavigate = () => {
        if (location.state) {
            if (location.state.hasOwnProperty('completingOrder')) {
                navigate('/completeOrder', { state: { reload: true } })
            }
        } else {
            navigate('/', { replace: true, state: { reload: true } })
        }
    }

    useEffect(() => {
        document.title = 'Sign In - Morning Basket'
        if (location.state) {
            if (location.state.hasOwnProperty('reload')) {
                window.location.reload()
            }
        }
    }, [location])

    const handleSignInSubmit = async (data: SignInFormData) => {
        setIsSubmitting(true)
        await signin(data.username, data.password)
        setIsSubmitting(false)
    }

    return (
        <div className="container w-full min-h-[calc(100vh-15rem)] mx-auto px-4 md:px-16 flex flex-row">
            <div className="flex-1 hidden lg:flex items-center justify-center">
                <img
                    className="m-auto rounded-3xl max-w-[80%] max-h-[80%]"
                    src={storefront}
                    alt="Morning Basket store at Crescent Mall"
                />
            </div>
            <div
                className="flex-1 w-2/5 overflow-y-hidden flex justify-center hover:overflow-y-auto"
                style={{ scrollbarGutter: 'stable' }}
            >
                <div className="m-auto my-auto w-full max-w-sm lg:w-64 flex flex-col justify-center">
                    <div>
                        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Đăng nhập vào tài khoản của bạn
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Chưa có tài khoản?{' '}
                            <Link
                                to="/signup"
                                // state={location.state.completingOrder ? { completingOrder: true } : undefined}
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                Đăng ký
                            </Link>
                        </p>
                    </div>

                    <div className="mt-10">
                        <div>
                            <form
                                className="space-y-6"
                                onSubmit={handleSubmit(handleSignInSubmit)}
                            >
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Địa chỉ email hoặc số điện thoại
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="username"
                                            {...register('username')}
                                            type="text"
                                            autoComplete="email"
                                            required
                                            // pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$"
                                            className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Mật khẩu
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            {...register('password')}
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-1 block text-sm leading-6 text-gray-700"
                                        >
                                            Ghi nhớ đăng nhập
                                        </label>
                                    </div>

                                    <div className="text-sm leading-6">
                                        <Link
                                            to="/contact"
                                            state={{
                                                username: watch('username'),
                                            }}
                                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                                        >
                                            Quên mật khẩu?
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-4 relative">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        {isSubmitting
                                            ? 'Đang đăng nhập...'
                                            : 'Đăng nhập'}
                                    </button>
                                    <div className="absolute w-full text-center text-sm text-red-500 mt-2 break-normal">
                                        {signinNotif}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {isAuthenticated && (
                <RedirectModal
                    message={signinNotif}
                    button_text="Trang chủ"
                    onProceed={() => {
                        handleNavigate()
                    }}
                />
            )}
        </div>
    )
}
