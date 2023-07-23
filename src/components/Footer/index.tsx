import React from 'react'
import { FooterContainer, FooterContent } from './styles'
import {
    PiMapPinLine,
    PiEnvelope,
    PiPhone,
    PiInstagramLogo,
    PiFacebookLogo,
} from 'react-icons/pi'

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent className='container mb-2'>
                <div className="column" style={{ flex: 1 }}>
                    <h3>Morning Basket</h3>
                    <p><a href="/aboutUs" className='hover:underline'>Về chúng tôi</a></p>
                    <p><a href="/contact" className='hover:underline'>Liên hệ</a></p>
                    <p><a href="/faq" className='hover:underline'>Các câu hỏi thường gặp</a></p>
                </div>
                <div className="column" style={{ flex: 1 }}>
                    <h3>Địa chỉ</h3>
                    <a href="https://goo.gl/maps/jSmEEyKMxsScN51WA" className='hover:underline'>
                        <PiMapPinLine className='inline' />{" "}B1F-10, Crescent Mall, Quận 7, Thành phố Hồ Chí Minh
                    </a>
                </div>
                <div className="column" style={{ flex: 1 }}>
                    <h3>Thông tin liên hệ</h3>

                    <a href="tel: (+84) 93 864 28 87">
                        <PiPhone className='inline' />{" "}(+84) 93 864 28 87</a>
                    <br />

                    <a href="mailto:hanorder@parkltd.net">
                        <PiEnvelope className='inline' />{" "}hanorder@parkltd.net
                    </a>
                </div>
                <div className="column" style={{ flex: 1 }}>
                    <h3>Theo dõi chúng tôi</h3>
                    <a href="https://www.instagram.com/morningbasket_official/">
                        <PiInstagramLogo />
                    </a>
                    <a href="https://www.facebook.com/morningbasketofficial/">
                        <PiFacebookLogo />
                    </a>
                </div>
            </FooterContent>
        </FooterContainer >
    )
}
