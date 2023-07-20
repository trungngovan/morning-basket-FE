import styled from 'styled-components';

export const FAQContainer = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 1rem;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
`;

export const Question = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    border-bottom: 2px solid #7d33ff;
    padding-bottom: 0.5rem;
    color: #7d33ff;

    &:focus {
        outline: none;
        border-bottom: 2px solid #f0b90b;
    }
`;

export const Answer = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: #333;
`;

export const BankInfo = styled.div`
    margin: 2rem 0;
    border: 2px solid #7d33ff;
    border-radius: 5px;
    padding: 1.5rem;

    &:focus {
        outline: none;
        border: 2px solid #f0b90b;
    }
`;

export const BankTitle = styled.h4`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #7d33ff;
`;

export const BankDetails = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
`;

export const StoreAddress = styled.div`
    margin: 2rem 0;
    border: 2px solid #7d33ff;
    border-radius: 5px;
    padding: 1.5rem;

    &:focus {
        outline: none;
        border: 2px solid #f0b90b;
    }
`;

export const AddressTitle = styled.h4`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #7d33ff;
`;

export const AddressDetails = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
`;
