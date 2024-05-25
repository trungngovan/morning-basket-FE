import React from 'react'
import { FooterContent } from './styles'
import {
    PiMapPinLine,
    PiEnvelope,
    PiPhone,
    PiInstagramLogo,
    PiFacebookLogo,
} from 'react-icons/pi'
import { defaultTheme } from '../../styles/themes/default'

export function Footer() {
    return (
        <footer
            className="w-full h-fit m-auto flex items-center justify-center absolute bot-0 z-[5]"
            style={{ background: defaultTheme.colors['base-background'] }}
        >
            <div className="container w-full mb-4 px-4 flex flex-col gap-1 items-start justify-between md:flex-row">
                <div className="md:max-w-[20%] justify-between">
                    <h3
                        className="top-0 text-[1.2rem] font-bold"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        Mama Shop
                    </h3>
                    <p
                        className="text-[1rem] mb-1"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        <a href="/aboutUs" className="hover:underline">
                            Về chúng tôi
                        </a>
                    </p>
                    <p
                        className="text-[1rem] mb-1"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        <a href="/contact" className="hover:underline">
                            Liên hệ
                        </a>
                    </p>
                    <p
                        className="text-[1rem] mb-1"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        <a href="/faq" className="hover:underline">
                            Các câu hỏi thường gặp
                        </a>
                    </p>
                    <p
                        className="text-[1rem] mb-1"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        <a href="/privacyPolicy" className="hover:underline">
                            Chính sách bảo mật
                        </a>
                    </p>
                </div>
                <div
                    className="md:max-w-[20%] justify-between"
                    style={{ flex: 1 }}
                >
                    <h3
                        className="top-0 text-[1.2rem] font-bold"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        Địa chỉ
                    </h3>
                    <p
                        className="text-[1rem] mb-1"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        <a
                            href="https://goo.gl/maps/jSmEEyKMxsScN51WA"
                            className="hover:underline"
                        >
                            <PiMapPinLine className="inline" /> KTX khu B, ĐHQG
                            HCM, Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh.
                        </a>
                    </p>
                </div>
                <div className="md:max-w-[20%] justify-between">
                    <h3
                        className="top-0 text-[1.2rem] font-bold"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        Liên hệ
                    </h3>
                    <p
                        className="text-[1rem] mb-1"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        <a
                            href="tel: (+84) 946 12 9294"
                            className="hover:underline"
                        >
                            <PiPhone className="inline" /> (+84) 946 12 9294
                        </a>
                    </p>
                    <p
                        className="text-[1rem] mb-1"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        <a
                            href="mailto:mamashop@gmail.com"
                            className="break-all hover:underline"
                        >
                            <PiEnvelope className="inline" /> mamashop@gmail.com
                        </a>
                    </p>
                </div>
                <div className="md:max-w-[20%] justify-between">
                    <h3
                        className="top-0 text-[1.2rem] font-bold"
                        style={{ color: defaultTheme.colors['base-text'] }}
                    >
                        Theo dõi chúng tôi
                    </h3>
                    <div className="flex flex-row gap-1">
                        <a href="https://www.instagram.com/nvtrung.dev//">
                            <PiInstagramLogo />
                        </a>
                        <a href="https://www.facebook.com/nvtrung.it/">
                            <PiFacebookLogo />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
