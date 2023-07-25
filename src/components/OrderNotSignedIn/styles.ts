import styled from 'styled-components'

// export const OrderNotSignedInContainer = styled.div`
//     width: 20vw;
//     height: 20vw;
//     background: ${({ theme }) => theme.colors['base-card']};
//     border-radius: 6px 36px 6px 36px;
//     padding: 1.25rem;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding-top: 0;
//     text-align: center;
//     position: absolute;
//     top: 40%;
//     left: 50%;
//     transform: translate(-50%, -50%) scale(1);
//     z-index: 2;
//     transition: all 0.2s ease-in-out;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

//     .open {
//         opacity: 1;
//         transform: translate(-50%, -50%) scale(1.2);
//         z-index: 3;
//     }

//     .product-card {
//         transform: scale(1.2);
//     }

//     button {
//         background-color: ${({ theme }) => theme.colors['brand-purple']};
//         color: ${({ theme }) => theme.colors['base-card']};
//         border: none;
//         border-radius: 6px;
//         padding: 1rem 2rem;
//         margin: 1rem;
//         cursor: pointer;
//         transition: all 0.2s ease-in-out;

//         &:hover {
//             background-color: ${({ theme }) => theme.colors['brand-purple-light']};
//         }
//     }

//     .click-container {
//         display: flex;
//         justify-content: space-between;
//         width: 100%;
//         position: absolute;
//         bottom: 0;
//         text-align: center;
//     }

//     .click {
//         background-color: ${({ theme }) => theme.colors['brand-purple']};
//         color: ${({ theme }) => theme.colors['base-card']};
//         border: none;
//         border-radius: 6px;
//         padding: 1rem 2rem;
//         margin: 1rem;
//         cursor: pointer;
//         transition: all 0.2s ease-in-out;
//         flex-grow: 1;
//         flex-shrink: 1;

//         &:hover {
//             background-color: ${({ theme }) => theme.colors['brand-purple-light']};
//         }
//     }

//     img {
//         width: 15rem;
//         height: 15rem;
//         margin-top: -7.5rem;
//         border-radius: 999px;
//         border: 2px solid ${({ theme }) => theme.colors['brand-purple-light']};
//     }
// `


export const OrderNotSignedInContainer = styled.div`
    width: 20vw;
    height: 20vw;
    background: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px 36px 6px 36px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
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

    button {
        background-color: ${({ theme }) => theme.colors['brand-purple']};
        color: ${({ theme }) => theme.colors['base-card']};
        border: none;
        border-radius: 6px;
        padding: 1rem 1rem;
        margin: 1rem;
        cursor: pointer;
        // transition: all 0.2s ease-in-out;

        &:hover {
            background-color: ${({ theme }) => theme.colors['brand-yellow']};
        }
    }

    .click-container {
        position: absolute;
        bottom: 0;
        width: 85%;
        height: 30%;
        display: flex;
        justify-content: space-between;
    }

    .click {
        background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
        color: ${({ theme }) => theme.colors['brand-yellow-dark']};
        // display: flex;
        border: none;
        border-radius: 1em;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        width: 8vw;
        height: 2.2vw;
        font-size: 0.7vw;
        padding: 1%;
        margin: 1%;
        text-align: center;
        font-weight: bold;

        &:hover {
            color: ${({ theme }) => theme.colors['base-card']};
            background-color: ${({ theme }) => theme.colors['brand-purple-dark']};
        }
    }

    img {
        width: 15rem;
        height: 15rem;
        margin-top: -7.5rem;
        border-radius: 999px;
        border: 2px solid ${({ theme }) => theme.colors['brand-purple-light']};
    }
`;

export const ProductPreviewContent = styled.div`
    margin-top: 2rem;
    margin-bottom: 1rem;
    max-width: 25rem;
`

export const ProductPreviewFooter = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors['brand-purple']};
    > div {
        display: flex;
        align-items: center;
        gap: 3px;

        p {
            line-height: 0.75rem;
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

export const ProductCardContainer = styled.div`
    width: 10rem;
    height: 10rem;
    margin: 1rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['base-card']};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`

export const ProductCardImage = styled.img`
    width: 80%;
    height: auto;
    object-fit: contain;
`

export const AddCartWrapper = styled.div`
    width: 7.5rem;

    > button {
        width: 2.375rem;
        height: 2.375rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.colors['brand-purple-dark']};
        color: ${({ theme }) => theme.colors['base-card']};
        border-radius: 6px;
        margin-left: 0.3rem;
        transition: 0.4s;

        &:hover {
            background: ${({ theme }) => theme.colors['brand-purple']};
        }
    }
`
