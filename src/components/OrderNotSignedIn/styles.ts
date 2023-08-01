import styled from 'styled-components'


export const OrderNotSignedInContainer = styled.div`
    position: fixed;
    width: fit-content;
    height: fit-content;
    min-width: 80%;
    background: ${({ theme }) => theme.colors['base-input']};
    border-radius: 6px 36px 6px 36px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    z-index: 6;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

    @media only screen and (min-width: 768px) {
        min-width: 30%;
    }

    .open {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 3;
    }

    .product-card {
        transform: scale(1.2);
    }

    .click {
        // display: flex;
        border-radius: 0.5rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        // width: 6vw;
        // height: 2.2vw;
        // font-size: 0.7vw;
        padding: 1%;
        margin: 1%;
        text-align: center;
        // font-weight: bold;
    }

    .deny {
        flex: 1;
        color: ${({ theme }) => theme.colors['base-card']};
        background-color: ${({ theme }) => theme.colors['brand-purple']};
        border: solid 1px;
        &:hover {
            color: ${({ theme }) => theme.colors['brand-purple-dark']};
            background-color: ${({ theme }) =>
        theme.colors['brand-purple-light']};
            border: solid 1px;
        }
    }

    .accept {
        flex: 1;
        color: ${({ theme }) => theme.colors['base-card']};
        background-color: ${({ theme }) => theme.colors['brand-yellow']};
        border: solid 1px;
        &:hover {
            color: ${({ theme }) => theme.colors['brand-yellow-dark']};
            background-color: ${({ theme }) =>
        theme.colors['brand-yellow-light']};
            border: solid 1px;
        }
    }
`


export const CloseButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    // border: none;
    background: ${({ theme }) => theme.colors['base-error']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    cursor: pointer;
    color: ${({ theme }) => theme.colors['brand-yellow-light']};
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    padding: 0.75rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    // border-radius: 8px;
    // border-radius: 50%;
    border-radius: 20px;

    &:hover {
        color: ${({ theme }) => theme.colors['brand-purple']};
        background-color: ${({ theme }) => theme.colors['brand-yellow']};
    }

    &:focus {
        outline: none;
    }
`

