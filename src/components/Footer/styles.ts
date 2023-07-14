import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    height: 3rem;
    background: ${({ theme }) => theme.colors['base-background']};
    display: flex;
    flex-direction: column;
    position: sticky;
    bottom: 0;
    left: 0;
    z-index: 5;
`

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    // center
    justify-content: center;
    span {
        color: ${({ theme }) => theme.colors['base-text']};
        font-size: ${({ theme }) => theme.textSizes['text-bold-s']};
    }

    svg {
        color: ${({ theme }) => theme.colors['base-text']};
        font-size: ${({ theme }) => theme.textSizes['text-bold-s']};
    }
`
