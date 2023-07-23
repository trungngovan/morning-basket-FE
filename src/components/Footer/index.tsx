import React from 'react'
import { FooterContainer, FooterContent } from './styles'
import {
    PiMapPinLine,
    PiPhone,
    PiInstagramLogo,
    PiFacebookLogo,
} from 'react-icons/pi'

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <span>
                    B1F-10, Crescent Mall, Quận 7, Thành phố Hồ Chí Minh
                </span>
                <a href="tel: (+84) 93 864 28 87">
                    <PiPhone />
                </a>
                <span>
                    <a href="mailto: hanorder@parkltd.net">
                        hanorder@parkltd.net
                    </a></span>
                <a href="https://goo.gl/maps/jSmEEyKMxsScN51WA">
                    <PiMapPinLine />
                </a>
                <span>Follow us on:</span>
                <a href="https://www.instagram.com/morningbasket_official/">
                    <PiInstagramLogo />
                </a>
                <a href="https://www.facebook.com/morningbasketofficial/">
                    <PiFacebookLogo />
                </a>
                {/* <a href="https://www.twitter.com">
                    <FaTwitter />
                </a>
                <a href="https://www.youtube.com">
                    <FaYoutube />
                </a> */}
            </FooterContent>
        </FooterContainer>
    )
}
