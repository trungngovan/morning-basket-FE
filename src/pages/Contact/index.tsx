import React from 'react'
import {
    ContactContainer,
    Title,
    Paragraph,
    InputContainer,
    Label,
    Input,
    TextArea,
    Button,
} from './styles'

const ContactPage: React.FC = () => {
    return (
        <ContactContainer>
            <Title>Contact Us</Title>
            <Paragraph>Contact</Paragraph>

            <form>
                <InputContainer>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" required />
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" required />
                </InputContainer>

                <InputContainer>
                    <Label htmlFor="message">Message</Label>
                    <TextArea id="message" name="message" rows={5} required />
                </InputContainer>

                <Button type="submit">Submit</Button>
            </form>
        </ContactContainer>
    )
}

export default ContactPage
