import React, { useEffect, useState } from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const signInFormValidationSchema = zod.object({
    username: zod.string().min(1, 'Vui lòng nhập email hoặc số điện thoại'),
    password: zod.string().min(6, 'Vui lòng nhập mật khẩu'),
})
export type SignInData = zod.infer<typeof signInFormValidationSchema>
type SignInFormData = SignInData
export function SignInPage() {
    const { register, handleSubmit } = useForm<SignInFormData>({
        resolver: zodResolver(signInFormValidationSchema),
    })
    const navigate = useNavigate()
    const { isAuthenticated, signin } = useAuth()
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        document.title = 'Sign In - Morning Basket'
    }, [])

    const handleSignInSubmit = async (data: SignInFormData) => {
        setIsSubmitting(true)
        await signin(data.username, data.password)
        setIsSubmitting(false)
    }

    if (isAuthenticated) {
        navigate('/')
    }

    return (
        <div className="container">
            <div className="flex min-h-full flex-1 my-24">
                <div className="relative hidden w-1 flex-1 lg:block">
                    <img
                        className="absolute inset-0 h-full w-full object-cover object-left"
                        src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/354901547_160684827004356_3927233456344602243_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zjQ2HY94a0UAX9TjmBW&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCp8a4W9NSsnqgNrtLZmEINCCOdI9AAV0yGLSn6eC1jZw&oe=64BFD7E4"
                        alt=""
                    />
                </div>
                <div className="w-2/5 flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-16 xl:px-18">
                    <div className="mx-auto w-full max-w-sm lg:w-64">
                        <div>
                            <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Not a member?{' '}
                                <a
                                    href="/signup"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Sign up
                                </a>
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
                                            Email address or phone number
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="username"
                                                {...register('username')}
                                                type="text"
                                                autoComplete="username"
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
                                            Password
                                        </label>
                                        <div className="mt-2">
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
                                                className="ml-3 block text-sm leading-6 text-gray-700"
                                            >
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm leading-6">
                                            <a
                                                href="/contact"
                                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            {isSubmitting
                                                ? 'Signing in...'
                                                : 'Sign in'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {isSubmitting && (
                                <div className="text-center mt-4 text-gray-500">
                                    Signing in...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
