import styled from 'styled-components'
import { TitleText, RegularText } from '../Typography'

export const ProductCardContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px 36px 6px 36px;
    box-shadow: 0 0 2px #C47F17B3; // brand-yellow-dark, B3 means opacity 70%
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 3rem;
`

export const Tags = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    overflow: hidden;

    :hover {
        overflow: scroll;
        ::-webkit-scrollbar {
            height: 0;
            width: 0;
        }
    }

    span {
        background: ${({ theme }) => theme.colors['brand-yellow-light']};
        color: ${({ theme }) => theme.colors['brand-yellow-dark']};
        font-size: ${({ theme }) => theme.textSizes['components-tag']};
        // text-transform: uppercase;
        padding: 0.25rem 0.5rem;
        border-radius: 999px;
        font-weight: 700;
        :hover {
            background: ${({ theme }) => theme.colors['brand-yellow']};
            color: ${({ theme }) => theme.colors['base-card']};
        }
    }
`

export const Name = styled(RegularText).attrs({
    size: 'm',
    color: 'text',
    weight: '600',
})`
    // margin-bottom: 0.5rem;
`

export const Description = styled(RegularText).attrs({
    size: 's',
    color: 'label',
})`
    // margin-bottom: 2rem;
`

export const CardFooter = styled.div`
    flex: 1 1 0%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    margin-top: auto;
    // padding-top: 0.5rem;
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

export const PreviewButton = styled.button`
    background: ${({ theme }) => theme.colors['brand-purple-light']};
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
    border: none;
    border-radius: 999px;
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    // font-weight: 800;
    // text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    // margin-left: 0.3rem;
    margin-bottom: 0.25rem;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.colors['brand-purple-dark']};
        color: ${({ theme }) => theme.colors['brand-purple-light']};
    }
`
