import styled from 'styled-components'
import { RegularText } from '../Typography'

export const ProductPreviewContainer = styled.div`
    position: fixed;
    width: fit-content;
    height: fit-content;
    background: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px 36px 6px 36px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    z-index: 6;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

    @media only screen and (min-width: 768px) {
        min-width: 10%;
        min-height: 20%;
        max-width: 15%;
        max-height: 30%;
    }

    .open {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 3;
    }

    .product-card {
        transform: scale(1.2);
    }

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -2rem;
        border-radius: 999px;
    }
`

export const Description = styled(RegularText).attrs({
    size: 's',
    color: 'label',
})``

export const Name = styled(RegularText).attrs({
    size: 'l',
    color: 'text',
    weight: '600',
})``

export const ProductPreviewContent = styled.div`
    margin-top: 1rem;
    // margin-bottom: 1rem;
    max-width: 25rem;
`

export const ProductPreviewFooter = styled.div`
    // position: absolute;
    bottom: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    margin-top: auto;
    padding: 1rem 1rem 0 1rem;
    // border-top: 1px solid ${({ theme }) => theme.colors['brand-purple']};
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
