// import React from 'react'
// import { HomeContainer } from './styles'

// export function AboutUsPage() {
//     return <HomeContainer>

//     </HomeContainer>
// }

import React from 'react'
import { AboutUsContainer, Title, Paragraph } from './styles'

const AboutUsPage: React.FC = () => {
    return (
        <AboutUsContainer>
            <Title>About Us</Title>
            <Paragraph>Morning basket</Paragraph>
            <Paragraph>
                Morning Basket is a specialty shop that offers a wide range of
                high-quality products for health-conscious individuals who
                prioritize their well-being. From organic fruits and vegetables
                to artisanal bread and freshly brewed coffee, Morning Basket
                provides customers with everything they need to start their day
                off on the right foot.
            </Paragraph>
        </AboutUsContainer>
    )
}

export default AboutUsPage
