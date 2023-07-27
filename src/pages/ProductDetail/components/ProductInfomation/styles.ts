import styled from 'styled-components'

export const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
    cursor: pointer;

    span {
        background: ${({ theme }) => theme.colors['brand-yellow-light']};
        color: ${({ theme }) => theme.colors['brand-yellow-dark']};
        font-size: ${({ theme }) => theme.textSizes['components-tag']};
        text-transform: uppercase;
        padding: 0.25rem 0.5rem;
        border-radius: 999px;
        font-weight: 700;
        &:hover {
            background: ${({ theme }) => theme.colors['brand-yellow']};
            color: ${({ theme }) => theme.colors['base-card']};
        }
    }
`
