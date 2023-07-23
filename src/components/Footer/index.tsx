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
            <FooterContent>
                <div className="column" style={{ flex: 1 }}>
                    <h3>About Us</h3>
                    <p>Hi about us</p>
                </div>
                <div className="column" style={{ flex: 1 }}>
                    <h3>Store Address</h3>
                    <p>B1F-10, Crescent Mall, Quận 7, Thành phố Hồ Chí Minh</p>
                </div>
                <div className="column" style={{ flex: 1 }}>
                    <h3>Contact</h3>
                    <a href="tel: (+84) 93 864 28 87">
                        <PiPhone />
                    </a>
                    <a href="tel: (+84) 93 864 28 87">(+84) 93 864 28 87</a>
                    <br />
                    <a href="mailto:hanorder@parkltd.net">
                        <PiEnvelope />
                    </a>
                    <a href="mailto:hanorder@parkltd.net">
                        hanorder@parkltd.net
                    </a>
                </div>
                <div className="column" style={{ flex: 1 }}>
                    <h3>Follow us on:</h3>
                    <a href="https://www.instagram.com/morningbasket_official/">
                        <PiInstagramLogo />
                    </a>
                    <a href="https://www.facebook.com/morningbasketofficial/">
                        <PiFacebookLogo />
                    </a>
                </div>
            </FooterContent>
        </FooterContainer>
    )
}
