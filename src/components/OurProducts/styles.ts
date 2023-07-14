import styled, { css } from 'styled-components'

export const OurProductsContainer = styled.section`
    width: 100%;
    margin: 1rem auto;
    max-width: 1000px;

    @media (max-width: 700px) {
        margin-top: 23rem;
    }
`

export const ProductList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    margin-top: 1rem;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2.4rem;
`

export const HorizontalScrollWrapper = styled.div`
    height: 3rem;
    overflow-x: hidden;
    overflow-y: hidden;

    :hover {
        overflow-x: scroll;
        ::-webkit-scrollbar {
            height: 0.4rem;
        }
    }
`

export const TagList = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    flex-wrap: nowrap;
    white-space: nowrap;
    margin: 0 1rem;
`

export interface TagButtonProps {
    isActive?: boolean
    variant?: 'purple' | 'yellow'
    prevSelectedTag?: string
}

export const Tag = styled.button<TagButtonProps>`
    border: none;
    background-color: ${(props) =>
        props.isActive ? props.theme.colors['base-button'] : '#f3f3f3'};
    color: ${(props) => (props.isActive ? '#fff' : '#333')};
    padding: 0.6rem 0.8rem;
    border-radius: 2rem;
    font-size: 1rem;
    margin-right: 0.3rem;
    margin-bottom: 0.3rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${(props) =>
            props.isActive ? props.theme.colors['base-button'] : '#e0e0e0'};
    }

    &:last-child {
        margin-right: 0;
    }

    ${({ variant, theme, isActive }) =>
        isActive &&
        variant === 'purple' &&
        `
      background-color: ${theme.colors['brand-purple']};
      color: ${theme.colors['base-white']};
    `}

    ${({ variant, theme, isActive }) =>
        isActive &&
        variant === 'yellow' &&
        `
      background-color: ${theme.colors['brand-yellow']};
      color: ${theme.colors['base-white']};
    `}

  ${({ variant, theme, isActive, prevSelectedTag }) =>
        isActive &&
        prevSelectedTag !== '' &&
        prevSelectedTag === 'purple' &&
        variant === 'yellow' &&
        `
      background-color: ${theme.colors['brand-yellow']};
      color: ${theme.colors['base-white']};
    `}

  ${({ variant, theme, isActive, prevSelectedTag }) =>
        isActive &&
        prevSelectedTag !== '' &&
        prevSelectedTag === 'yellow' &&
        variant === 'purple' &&
        `
      background-color: ${theme.colors['brand-purple']};
      color: ${theme.colors['base-white']};
    `}
`
