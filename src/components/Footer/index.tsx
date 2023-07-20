import React from 'react'
import { FooterContainer, FooterContent } from './styles'
import { MapPin, Phone } from 'phosphor-react'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <span>123 Main St, City, State ZIP</span>
                <a href="tel:(123) 456-7890">
                    <Phone />
                </a>
                <span>info@morningbasket.com</span>
                <a href="https://maps.google.com">
                    <MapPin />
                </a>
                <span>Follow us on:</span>
                <a href="https://www.instagram.com">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com">
                    <FaFacebook />
                </a>
                <a href="https://www.twitter.com">
                    <FaTwitter />
                </a>
                <a href="https://www.youtube.com">
                    <FaYoutube />
                </a>
            </FooterContent>
        </FooterContainer>
    )
}
