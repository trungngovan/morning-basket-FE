import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background: ${({ theme }) => theme.colors['base-background']};
`

export const Input = styled.input`
    border: none;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    margin-right: 0.3rem;
    width: 200px;
    box-shadow: ${({ theme }) => theme.colors['base-card']};
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-text']};

    ::placeholder {
        color: ${({ theme }) => theme.colors['base-hover']};
    }
`

export const Button = styled.button`
    border: none;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    margin-right: 0.3rem;
    background-color: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-text']};
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors['base-card']};

    :hover {
        background-color: ${({ theme }) => theme.colors['brand-purple-dark']};
        color: ${({ theme }) => theme.colors['base-white']};
    }
`

export const Select = styled.select`
    border: none;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    margin-right: 0.3rem;
    background-color: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors['base-card']};

    :hover {
        background-color: ${({ theme }) => theme.colors['base-background']};
    }
`
