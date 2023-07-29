import React, { useEffect, useState } from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { RedirectCountdown } from '../../components/RedirectCountdown'
import storefront from '../../assets/store-front.jpg'

const signUpFormValidationSchema = zod.object({
    name: zod.string().min(2, 'Vui lòng nhập tên có ít nhất 2 ký tự'),
    email: zod
        .string()
        .email("Vui lòng nhập địa chỉ email có dấu '@'")
        .min(1, 'Vui lòng nhập địa chỉ email'),
    phoneNumber: zod
        .string()
        .regex(new RegExp(/^[0-9]{10}$/), 'Phải bao gồm 10 ký tự là chữ số')
        .min(1, 'Vui lòng nhập số điện thoại'),
    password: zod.string().min(6, 'Vui lòng nhập mật khẩu'),
    passwordConfirmation: zod.string().min(6, 'Vui lòng nhập lại mật khẩu'),
})
export type SignUpData = zod.infer<typeof signUpFormValidationSchema>
type SignUpFormData = SignUpData

export function SignUpPage() {
    const {
        register,
        formState: { errors },
        watch,
        getValues,
        handleSubmit,
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpFormValidationSchema),
    })
    const navigate = useNavigate()
    const { signup, signupNotif } = useAuth()
    const [storefrontImgLoaded, setStorefrontImgLoaded] = useState<boolean>(false)
    const [storefrontImgWidth, setStorefrontImgWidth] = useState<number>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [timer, setTimer] = useState<NodeJS.Timeout>()

    useEffect(() => {
        document.title = 'Sign Up - Morning Basket'
    }, [])

    const handleNavigate = ((formData: SignUpFormData) => {
        navigate('/signin', { state: { formData: formData } })
    })


    const handleSignUpSubmit = async (data: SignUpFormData) => {
        setIsSubmitting(true)
        await signup(
            data.name,
            data.phoneNumber,
            data.email,
            data.password
        ).then(
            () => {
                setIsSubmitting(false)
                setTimer(setTimeout(() => { handleNavigate(data) }, 3000))
                setShowModal(true)
            },
            () => setIsSubmitting(false)
        )
    }

    return (
        <div
            className="container my-4 py-8 flex min-h-full flex-1 px-4"
            style={{
                height: storefrontImgLoaded
                    ? (storefrontImgWidth as number) / 3
                    : 'full',
            }}
        >
            <div className="relative hidden w-1 flex-1 lg:block">
                <img
                    className="absolute inset-0 h-full w-full object-cover object-left"
                    src={storefront}
                    alt=""
                    onLoad={(e) => {
                        setStorefrontImgWidth(e.currentTarget.naturalWidth)
                        setStorefrontImgLoaded(true)
                    }}
                />
            </div>
            {storefrontImgLoaded ? (
                <div className="flex-1 w-2/5 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-16 xl:px-18">
                    <div className="mx-auto w-full max-w-sm lg:w-64">
                        <div>
                            <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Đăng ký tài khoản
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Đã là thành viên?{' '}
                                <a
                                    href="/signin"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Đăng nhập
                                </a>
                            </p>
                        </div>

                        <div className="mt-4">
                            <div>
                                <form
                                    className="space-y-2"
                                    onSubmit={handleSubmit(handleSignUpSubmit)}
                                    noValidate
                                >
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Họ và Tên
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="name"
                                                {...register('name')}
                                                type="text"
                                                autoComplete="name"
                                                required
                                                // pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$"
                                                className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                            />
                                            {errors ? (
                                                <p className="text-sm text-red-500">
                                                    {
                                                        errors?.name
                                                            ?.message as string
                                                    }
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phoneNumber"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Số điện thoại
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="phoneNumber"
                                                {...register('phoneNumber')}
                                                type="text"
                                                autoComplete="phone"
                                                required
                                                // pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$"
                                                className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                            />
                                            {errors ? (
                                                <p className="text-sm text-red-500">
                                                    {
                                                        errors?.phoneNumber
                                                            ?.message as string
                                                    }
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Địa chỉ email
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                {...register('email')}
                                                type="email"
                                                autoComplete="email"
                                                required
                                                // pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$"
                                                className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                            />
                                            {errors ? (
                                                <p className="text-sm text-red-500">
                                                    {
                                                        errors?.email
                                                            ?.message as string
                                                    }
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Mật khẩu
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
                                            {errors ? (
                                                <p className="text-sm text-red-500">
                                                    {
                                                        errors?.password
                                                            ?.message as string
                                                    }
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="passwordConfirmation"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nhập lại mật khẩu
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="passwordConfirmation"
                                                {...register(
                                                    'passwordConfirmation'
                                                )}
                                                type="password"
                                                required
                                                className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                            />
                                            {errors ? (
                                                <p className="text-sm text-red-500">
                                                    {
                                                        errors
                                                            ?.passwordConfirmation
                                                            ?.message as string
                                                    }
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>
                                    {watch('passwordConfirmation') !==
                                        watch('password') &&
                                        getValues('passwordConfirmation') ? (
                                        <p className="text-sm text-red-500">
                                            Mật khẩu không khớp
                                        </p>
                                    ) : null}
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            {isSubmitting
                                                ? 'Đang đăng ký...'
                                                : 'Đăng ký'}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* <div className="mt-10">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div className="w-full border-t border-gray-200" />
                                    </div>
                                    <div className="relative flex justify-center text-sm font-medium leading-6">
                                        <span className="bg-white px-6 text-gray-900">Or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-4">
                                    <a
                                        href="#"
                                        className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                                    >
                                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                        <span className="text-sm font-semibold leading-6">Twitter</span>
                                    </a>

                                    <a
                                        href="#"
                                        className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                                    >
                                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-sm font-semibold leading-6">GitHub</span>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                        <div className="text-center text-sm truncate text-wrap text-red-500 mt-4 min-h-[4rem]">
                            {signupNotif}
                        </div>
                    </div>
                </div>
            ) : null}
            {showModal && (
                <RedirectCountdown
                    seconds={3}
                    onProceed={
                        () => {
                            clearTimeout(timer)
                            handleNavigate(getValues())
                        }
                    }
                ></RedirectCountdown>
            )}
        </div>
    )
}
