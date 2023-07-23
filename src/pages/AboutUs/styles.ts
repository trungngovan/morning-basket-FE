import styled from 'styled-components'

export const AboutUsContainer = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 2rem auto;
    padding: 2rem 1rem;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
`

export const Paragraph = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
`

export const ProductHightlight = styled.div`
    margin: 1rem 0;
    border: 1px solid #7d33ff;
    border-radius: 5px;
    padding: 1rem 2rem;
    justify-content: space-between;

    &:focus {
        outline: none;
        border: 2px solid #f0b90b;
    }
`