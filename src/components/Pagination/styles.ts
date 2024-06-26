import styled from 'styled-components'

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2.4rem;
`

export const PaginationButton = styled.button<{ isActive: boolean }>`
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.6rem 1.4rem;
    margin-right: 0.6rem;
    border-radius: 0.4rem;
    background-color: ${(props) =>
        props.isActive
            ? props.theme.colors['base-text']
            : props.theme.colors['base-white']};
    color: ${(props) =>
        props.isActive
            ? props.theme.colors['base-white']
            : props.theme.colors['base-text']};
    cursor: pointer;
    border: none;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`
