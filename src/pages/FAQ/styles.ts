import styled from 'styled-components'

export const FAQContainer = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 2rem auto;
    // padding: 2rem 1rem;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
`

export const Question = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    border-bottom: 1px solid #7d33ff;
    padding-bottom: 0.5rem;
    color: #7d33ff;

    &:focus {
        outline: none;
        border-bottom: 2px solid #f0b90b;
    }
`

export const AnswerWrapper = styled.div`
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
export const AnswerTitle = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.colors["brand-purple"]};
`

export const AnswerDetails = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
`
