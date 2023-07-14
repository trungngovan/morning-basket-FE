import styled from 'styled-components'

export const AddCartWrapper = styled.div`
    // width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
        height: 2.375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors['base-input']};
        background: ${({ theme }) => theme.colors['brand-purple']};
        border: 1px solid ${({ theme }) => theme.colors['brand-purple']};
        border-radius: 6px;
        transition: 0.1s;
        padding: 0.5rem;

        &:hover {
            color: ${({ theme }) => theme.colors['brand-purple']};
            background: ${({ theme }) => theme.colors['brand-purple-light']};
        }
    }
`
