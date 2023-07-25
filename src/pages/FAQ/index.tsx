import React from 'react'
import {
    FAQContainer,
    Title,
    Question,
    AnswerWrapper,
    AnswerTitle,
    AnswerDetails,
} from './styles'
import bankqr from '../../assets/bank_qr.jpg'

const FAQPage: React.FC = () => {
    return (
        <FAQContainer>
            <Title>Các câu hỏi thường gặp</Title>

            <Question>Làm sao để thanh toán?</Question>
            <AnswerWrapper id="faq_payment">
                <AnswerDetails>
                    Quý khách có thể thanh toán bằng cách chuyển khoản cho chúng
                    tôi với{' '}
                    <a
                        href="#faq_bank"
                        className="text-indigo-600 hover:text-indigo-500 hover:underline"
                    >
                        thông tin ngân hàng
                    </a>{' '}
                    bên dưới.
                </AnswerDetails>
                <br />
                <AnswerDetails>
                    Nếu quý khách muốn thanh toán bằng phương thức khác, vui
                    lòng liên hệ với chúng tôi qua{' '}
                    <a
                        href="#faq_bank"
                        className="text-indigo-600 hover:text-indigo-500 hover:underline"
                    >
                        email hoặc điện thoại
                    </a>{' '}
                    để biết thêm thông tin.
                </AnswerDetails>
            </AnswerWrapper>

            <Question id="faq_bank">Thông tin chuyển khoản ngân hàng?</Question>
            <AnswerWrapper>
                <div className="flex flex-row">
                    <div className="flex-1 m-auto">
                        <AnswerTitle>
                            Ngân Hàng Shinhan Việt Nam
                            <br />
                            (Shinhan Bank Vietnam)
                        </AnswerTitle>
                        <AnswerTitle>
                            Số tài khoản:{' '}
                            <AnswerDetails>700009368988</AnswerDetails>
                        </AnswerTitle>
                        <AnswerTitle>
                            Chủ tài khoản:{' '}
                            <AnswerDetails>JANG JUNHO (장준호)</AnswerDetails>
                        </AnswerTitle>
                    </div>
                    <div className="flex-1 object-center">
                        <img
                            src={bankqr}
                            alt=""
                            className="m-auto w-2/3 p-2/3 rounded-3xl"
                        />
                    </div>
                </div>
            </AnswerWrapper>

            <Question id="faq_store">Thông tin cửa hàng?</Question>
            <AnswerWrapper>
                <AnswerTitle>
                    Địa chỉ:{' '}
                    <AnswerDetails>
                        <a
                            href="https://goo.gl/maps/jSmEEyKMxsScN51WA"
                            className="hover:underline"
                        >
                            B1F-10, Crescent Mall, Quận 7, Thành phố Hồ Chí Minh
                        </a>
                    </AnswerDetails>
                </AnswerTitle>
                <AnswerTitle>
                    Email:{' '}
                    <AnswerDetails>
                        <a href="mailto: hanorder@parkltd.net">
                            hanorder@parkltd.net
                        </a>
                    </AnswerDetails>
                </AnswerTitle>
                <AnswerTitle>
                    Số điện thoại:{' '}
                    <AnswerDetails>
                        <a href="tel: (+84) 93 864 28 87">(+84) 93 864 28 87</a>
                    </AnswerDetails>
                </AnswerTitle>
            </AnswerWrapper>
        </FAQContainer>
    )
}

export default FAQPage
