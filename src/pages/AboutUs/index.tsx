import React from 'react'
import { AboutUsContainer, Title, Paragraph, ProductHightlight } from './styles'

const AboutUsPage: React.FC = () => {
    return (

        <AboutUsContainer>
            <Title>Morning Basket</Title>
            <Paragraph>
                Bạn đang tìm kiếm món ăn nhẹ ngon, dinh dưỡng và lành mạnh để thưởng thức?
                <br />
                Không cần tìm đâu xa! { }
                <a href='https://morningbasket.vn' className="text-indigo-600 hover:text-indigo-500">
                    Morning Basket
                </a>
                { } sẽ cung cấp cho bạn đầy đủ!
            </Paragraph>
            <Paragraph>
                Morning Basket tự hào giới thiệu đến khách hàng:
                <ProductHightlight>
                    <ul>
                        <li>⭐️ Trái cây tươi nhập khẩu (theo mùa)</li>
                        <li>⭐️ Nước trái cây lên men</li>
                        <li>⭐️ Nước uống Cocomong hương trái cây</li>
                        <li>⭐️ Snack rong biển hương tre</li>
                        <li>⭐️ Rong biển vụn tẩm gia vị</li>
                        <li>⭐️ Kẹo nhân sâm</li>
                        <li>⭐️ Kẹo hồng sâm</li>
                        <li>⭐️ Kẹo hồng sâm Goryeo</li>
                        <li>⭐️ Cùng nhiều sản phẩm chất lượng khác</li>
                    </ul>
                </ProductHightlight>
            </Paragraph>
            <Paragraph>
                Sản phẩm của Morning Basket được làm từ các thành phần tự nhiên và giàu dinh dưỡng, giúp duy trì vóc dáng và tăng cường sức khoẻ tốt. Hơn nữa, sản phẩm được đóng gói an toàn, vệ sinh và chất lượng.
                <br />
                Hãy thưởng thức những sản phẩm của chúng tôi và tận hưởng sự ngon miệng và bổ dưỡng này nhé!
            </Paragraph >
        </AboutUsContainer >
    )
}

export default AboutUsPage
