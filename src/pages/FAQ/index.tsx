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
            <AnswerWrapper id="payment">
                <AnswerDetails>
                    Quý khách có thể thanh toán bằng cách chuyển khoản cho chúng
                    tôi với{' '}
                    <a
                        href="#bank"
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
                        href="#store"
                        className="text-indigo-600 hover:text-indigo-500 hover:underline"
                    >
                        email hoặc điện thoại
                    </a>{' '}
                    để biết thêm thông tin.
                </AnswerDetails>
            </AnswerWrapper>

            <Question>
                Làm sao tôi biết đơn hàng đã được xác nhận chưa?
            </Question>
            <AnswerWrapper id="orderConfirm">
                <AnswerDetails>
                    Chúng tôi sẽ liên hệ với quý khách trong vòng 24 tiếng sau
                    khi ghi nhận thông tin đơn hàng để xác nhận đơn hàng.
                    <br />
                    Chúng tôi sẽ ưu tiên việc gọi đến số điện thoại quý khách đã
                    cung cấp. Nếu không được, chúng tôi sẽ gửi tin nhắn SMS hoặc
                    gửi thư điện tử đến địa chỉ email quý khách đã cung cấp.
                </AnswerDetails>
                <br />
                <br />
                <AnswerDetails>
                    Quý khách có thể liên hệ với chúng tôi trước qua{' '}
                    <a
                        href="#store"
                        className="text-indigo-600 hover:text-indigo-500 hover:underline"
                    >
                        email hoặc điện thoại
                    </a>{' '}
                    để biết thêm thông tin.
                </AnswerDetails>
            </AnswerWrapper>

            <Question id="bank">Thông tin chuyển khoản ngân hàng?</Question>
            <AnswerWrapper>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 m-auto">
                        <AnswerTitle>
                            Ngân Hàng Vietcombank
                            <br />
                            (Vietcombank)
                        </AnswerTitle>
                        <AnswerTitle>
                            Số tài khoản:{' '}
                            <AnswerDetails>9946129294</AnswerDetails>
                        </AnswerTitle>
                        <AnswerTitle>
                            Chủ tài khoản:{' '}
                            <AnswerDetails>Ngo Van Trung</AnswerDetails>
                        </AnswerTitle>
                        <br />
                        <AnswerDetails>
                            Quý khách có thể quét mã QR trong hình đính kèm bằng
                            ứng dụng nga.
                        </AnswerDetails>
                    </div>
                    <div className="flex-1 object-center">
                        <img
                            src={bankqr}
                            alt=""
                            className="m-auto rounded-3xl md:w-2/3"
                        />
                    </div>
                </div>
            </AnswerWrapper>

            <Question id="store">Thông tin cửa hàng?</Question>
            <AnswerWrapper>
                <AnswerTitle>
                    Địa chỉ:{' '}
                    <AnswerDetails>
                        <a
                            href="https://goo.gl/maps/jSmEEyKMxsScN51WA"
                            className="hover:underline"
                        >
                            KTX khu B, ĐHQG HCM, Linh Trung, Thủ Đức, Thành phố
                            Hồ Chí Minh.
                        </a>
                    </AnswerDetails>
                </AnswerTitle>
                <AnswerTitle>
                    Email:{' '}
                    <AnswerDetails>
                        <a href="mailto: mamashop@gmail.com">
                            mamashop@gmail.com
                        </a>
                    </AnswerDetails>
                </AnswerTitle>
                <AnswerTitle>
                    Số điện thoại:{' '}
                    <AnswerDetails>
                        <a href="tel: (+84) 946 12 9294">(+84) 946 12 9294</a>
                    </AnswerDetails>
                </AnswerTitle>
            </AnswerWrapper>
        </FAQContainer>
    )
}

export default FAQPage
