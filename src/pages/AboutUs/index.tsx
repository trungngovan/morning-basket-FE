import React from 'react'
import { AboutUsContainer, Title, Paragraph, ProductHightlight } from './styles'

const AboutUsPage: React.FC = () => {
    return (
        <AboutUsContainer>
            <Title>Mama Shop</Title>
            <Paragraph>
                Bạn đang tìm kiếm món ăn nhẹ ngon, dinh dưỡng và lành mạnh để
                thưởng thức?
                <br />
                Không cần tìm đâu xa! {}
                <a
                    href="https://morning-basket-fe.vercel.app/"
                    className="text-indigo-600 hover:text-indigo-500"
                >
                    Mama Shop
                </a>
                {} sẽ cung cấp cho bạn đầy đủ!
            </Paragraph>
            <Paragraph>
                Mama Shop tự hào giới thiệu đến khách hàng:
                <ProductHightlight>
                    <ul>
                        <li>⭐️ Trái cây tươi nhập khẩu (theo mùa)</li>
                        <li>⭐️ Nước trái cây lên men</li>
                        <li>⭐️ Snack rong biển hương tre</li>
                        <li>⭐️ Cùng nhiều sản phẩm chất lượng khác</li>
                    </ul>
                </ProductHightlight>
            </Paragraph>
            <Paragraph>
                Sản phẩm của Mama Shop được làm từ các thành phần tự nhiên và
                giàu dinh dưỡng, giúp duy trì vóc dáng và tăng cường sức khoẻ
                tốt. Hơn nữa, sản phẩm được đóng gói an toàn, vệ sinh và chất
                lượng.
                <br />
                Hãy thưởng thức những sản phẩm của chúng tôi và tận hưởng sự
                ngon miệng và bổ dưỡng này nhé!
            </Paragraph>
        </AboutUsContainer>
    )
}

export default AboutUsPage
