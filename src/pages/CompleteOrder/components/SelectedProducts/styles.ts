import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 53rem;

    @media (max-width: 1000px) {
        width: 100%;
    }
`

export const DetailsContainer = styled(SectionBaseStyle)`
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`

export const ConfirmationSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
