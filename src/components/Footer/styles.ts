import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    height: 3rem;
    background: ${({ theme }) => theme.colors['base-background']};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    left: 0;
    z-index: 5;
`

export const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    gap: 1rem;
    // margin-top: 1rem;
    margin-left: 20%;
    margin-right: 20%;

    .column {
        flex: 1;
        min-width: 0;
        margin-right: 1rem;
        justify-content: space-between;
        
        h3 {
            position: top;
            color: ${({ theme }) => theme.colors['base-text']};
            font-size: ${({ theme }) => theme.textSizes['title-title-s']};
            margin-bottom: 0.5rem;
        }

        p {
            color: ${({ theme }) => theme.colors['base-text']};
            font-size: ${({ theme }) => theme.textSizes['text-bold-m']};
            margin-bottom: 0.5rem;
        }
        a {
            display: inline-block;
            margin-right: 0.5rem;
        }
    }

    svg {
        color: ${({ theme }) => theme.colors['base-text']};
        font-size: ${({ theme }) => theme.textSizes['text-bold-m']};
    }
`;
