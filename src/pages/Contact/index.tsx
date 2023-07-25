import React from 'react'
import {
    ContactContainer,
    Title,
    InputContainer,
    Label,
    Input,
    TextArea,
    FormWrapper,
} from './styles'

const ContactPage: React.FC = () => {
    return (
        <ContactContainer>
            <Title>Liên hệ với chúng tôi</Title>
            <FormWrapper>
                <form>
                    <InputContainer>
                        <Label htmlFor="name">Họ và Tên</Label>
                        <Input type="text" id="name" name="name" required />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email" required />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input type="phone" id="phone" name="phone" required />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="message">Lời nhắn</Label>
                        <TextArea
                            id="message"
                            name="message"
                            rows={5}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <button
                            type="submit"
                            className="flex ml-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Gửi
                        </button>
                    </InputContainer>
                </form>
            </FormWrapper>
        </ContactContainer>
    )
}

export default ContactPage
