import styled from 'styled-components'

export const ContactContainer = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 1rem;
`

export const Title = styled.h1`
    font-size: 2.5rem;
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
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`

export const Label = styled.label`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    // color: #7d33ff;
`

export const Input = styled.input`
    border: none;
    border: 2px solid #7d33ff;
    padding: 0.5rem;
    font-size: 1rem;
    margin-bottom: 1rem;

    &:focus {
        outline: none;
        border: 2px solid #f0b90b;
    }
`

export const TextArea = styled.textarea`
    border: 2px solid #7d33ff;
    padding: 0.5rem;
    font-size: 1rem;
    resize: vertical;
    margin-bottom: 1rem;

    &:focus {
        outline: none;
        border: 2px solid #f0b90b;
    }
`

export const Button = styled.button`
    background-color: #7d33ff;
    color: #fff;
    border: none;
    padding: 0.8rem 1.2rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f0b90b;
    }
`
