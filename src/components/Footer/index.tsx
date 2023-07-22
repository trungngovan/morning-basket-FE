import React from 'react'
import { FooterContainer, FooterContent } from './styles'
import { MapPin, Phone } from 'phosphor-react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <span>
                    B1F-10, Crescent Mall, Quận 7, Thành phố Hồ Chí Minh
                </span>
                <a href="tel: (+84) 93 864 28 87">
                    <Phone />
                </a>
                <span>hanorder@parkltd.net</span>
                <a href="https://goo.gl/maps/jSmEEyKMxsScN51WA">
                    <MapPin />
                </a>
                <span>Follow us on:</span>
                <a href="https://www.instagram.com/morningbasket_official/">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/morningbasketofficial/">
                    <FaFacebook />
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
