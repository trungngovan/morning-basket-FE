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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        document.title = 'Sign Up - Morning Basket'
    }, [])

    const handleNavigate = (formData: SignUpFormData) => {
        navigate('/signin')
    }

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
                setShowModal(true)
            },
            () => setIsSubmitting(false)
        )
    }

    return (
        <div className="container w-full min-h-[calc(100vh-15rem)] m-auto px-4 flex flex-row mb-[max(2rem,0rem)] md:px-16">
            <div className="flex-1 hidden lg:flex items-center justify-center">
                <img
                    className="m-auto rounded-3xl max-w-[80%] max-h-[80%]"
                    src={storefront}
                    alt="Morning Basket store at Crescent Mall"
                />
            </div>
            <div
                className="flex-1 w-2/5 overflow-y-hidden flex items-center justify-center hover:overflow-y-auto"
                style={{ scrollbarGutter: 'stable' }}
            >
                <div className="m-auto w-full max-w-sm lg:w-64 flex flex-col justify-center">
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
                                        Họ và Tên{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1">
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
                                        Số điện thoại{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1">
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
                                        Địa chỉ email{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1">
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
                                        Mật khẩu{' '}
                                        <span className="text-red-500">*</span>
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
                                        Nhập lại mật khẩu{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1">
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
                                                    errors?.passwordConfirmation
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
                                <div className="mt-4 relative">
                                    <p className="mt-2 text-xs text-gray-500 italic">
                                        Bằng cách bấm "Đăng ký", bạn đồng ý với{' '}
                                        <a
                                            href="/faq"
                                            className="text-indigo-600 hover:text-indigo-500 hover:underline"
                                        >
                                            Điều khoản dịch vụ
                                        </a>{' '}
                                        của chúng tôi
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="mt-1 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        {isSubmitting
                                            ? 'Đang đăng ký...'
                                            : 'Đăng ký'}
                                    </button>
                                    <div className="absolute w-full text-center text-sm text-red-500 mt-2 break-normal">
                                        {signupNotif}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <RedirectCountdown
                    message={signupNotif}
                    button_text="Đăng nhập"
                    onProceed={() => {
                        handleNavigate(getValues())
                    }}
                ></RedirectCountdown>
            )}
        </div>
    )
}
