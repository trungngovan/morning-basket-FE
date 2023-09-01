import styled from 'styled-components'

export const RedirectModalContainer = styled.div`
    width: 15vw;
    height: 10vw;
    background: ${({ theme }) => theme.colors['base-input']};
    border-radius: 6px 36px 6px 36px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    z-index: 2;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

    .open {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 3;
    }

    .product-card {
        transform: scale(1.2);
    }

    .title {
        font-size: 0.9vw;
    }

    .click-container {
        position: absolute;
        bottom: 0;
        margin-bottom: 0.5rem;
        width: 85%;
        height: 30%;
        display: flex;
        justify-content: center;
    }

    .proceed {
        border-radius: 0.5rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        // width: 6vw;
        // height: 2.2vw;
        // font-size: 0.7vw;
        // padding: 1%;
        // margin: 1%;
        text-align: center;
        font-weight: bold;
        color: ${({ theme }) => theme.colors['base-card']};
        background-color: ${({ theme }) => theme.colors['brand-yellow']};
        &:hover {
            color: ${({ theme }) => theme.colors['brand-yellow-dark']};
            background-color: ${({ theme }) =>
                theme.colors['brand-yellow-light']};
            border: solid 1px;
        }
    }
`
