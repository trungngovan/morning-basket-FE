import React from 'react'
import {
    FAQContainer,
    Title,
    Question,
    Answer,
    BankInfo,
    BankTitle,
    BankDetails,
    StoreAddress,
    AddressTitle,
    AddressDetails,
} from './styles'

const FAQPage: React.FC = () => {
    return (
        <FAQContainer>
            <Title>Frequently Asked Questions</Title>

            <Question>How do I make a payment?</Question>
            <Answer>Answer</Answer>

            <Question>What is your bank information?</Question>
            <BankInfo>
                <BankTitle>Bank Name:</BankTitle>
                <BankDetails>Example Bank</BankDetails>
                <BankTitle>Account Number:</BankTitle>
                <BankDetails>1234567890</BankDetails>
                <BankTitle>Routing Number:</BankTitle>
                <BankDetails>123456789</BankDetails>
            </BankInfo>

            <Question>Where is your store located?</Question>
            <StoreAddress>
                <AddressTitle>Address:</AddressTitle>
                <AddressDetails>123 Main St, Anytown, USA</AddressDetails>
                <AddressTitle>Phone:</AddressTitle>
                <AddressDetails>(123) 456-7890</AddressDetails>
                <AddressTitle>Email:</AddressTitle>
                <AddressDetails>info@example.com</AddressDetails>
            </StoreAddress>
        </FAQContainer>
    )
}

export default FAQPage
