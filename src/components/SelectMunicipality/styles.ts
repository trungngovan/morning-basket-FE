import styled, { css } from 'styled-components'

export const SelectWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    position: relative;

    > p {
        color: ${({ theme }) => theme.colors['base-error']};
    }
`

interface SelectContainerProps {
    hasError: boolean
}

export const SelectStyleContainer = styled.div<SelectContainerProps>`
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    background: ${({ theme }) => theme.colors['base-input']};
    display: flex;
    align-items: center;
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    &:focus-within {
        border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    }

    ${({ theme, hasError }) =>
        hasError &&
        css`
            border-color: ${theme.colors['base-error']};
        `}
`

export const InputStyled = styled.input`
    // width: 1/3;
    background: none;
    border: none;
    padding: 0 0.75rem;
    height: 100%;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors['base-text']};

    &::placeholder {
        color: ${({ theme }) => theme.colors['base-label']};
    }
`

export const SelectStyled = styled.select`
    width: 100%;
    background: none;
    border: none;
    padding: 0 0.75rem;
    height: 100%;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors['base-text']};
`

export const Option = styled.option``
