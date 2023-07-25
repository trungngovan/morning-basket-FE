import styled from 'styled-components'

export const ContactContainer = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 2rem auto;
    padding: 2rem 1rem;
`

export const FormWrapper = styled.div`
    margin: 1rem 0;
    border: 1px solid #7d33ff;
    border-radius: 5px;
    padding: 1rem;
    justify-content: space-between;

    &:focus {
        outline: none;
        border: 2px solid #f0b90b;
    }
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
    color: #333;
`

export const InputContainer = styled.div`
    margin: 1rem;
    // width: 90%;
    display: flex;
    justify-content: space-around;
`

export const Label = styled.label`
    font-size: 1.2rem;
    font-weight: bold;
    width: 20%;
    margin: auto 0;
    color: ${({ theme }) => theme.colors['brand-purple']};
    @media (max-width: 700px) {
        font-size: 70%;
    }
`

export const Input = styled.input`
    border: 1px solid #7d33ff;
    padding: 0.5rem;
    margin: 0 auto;
    font-size: 1rem;
    width: 100%;

    &:focus {
        outline: none;
        border: 1px solid #f0b90b;
    }
`

export const TextArea = styled.textarea`
    border: 1px solid #7d33ff;
    padding: 0.5rem;
    font-size: 1rem;
    resize: vertical;
    width: 100%;

    &:focus {
        outline: none;
        border: 2px solid #f0b90b;
    }
`
