import styled from "styled-components";
import { TitleText, RegularText } from "../Typography";

export const ProductDetailContainer = styled.div`
  width: auto;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  z-index: 2;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  &.open {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
    z-index: 3;
  }

  .product-card {
    transform: scale(1.2);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;

  &.open {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const ProductDetailImage = styled.img`
  width: 15rem;
  height: 15rem;
  margin-top: -7.5rem;
  border-radius: 999px;
`;

export const ProductDetailContent = styled.div`
  margin-top: 2rem;
`;

export const ProductDetailFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors["brand-purple"]};

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  background: ${({ theme }) => theme.colors["brand-purple"]};
  font-size: ${({ theme }) => theme.textSizes["components-tag"]};
  cursor: pointer;
  color: ${({ theme }) => theme.colors["brand-yellow"]};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  padding: 0.75rem;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors["brand-purple"]};
    background-color: ${({ theme }) => theme.colors["brand-yellow"]};
  }

  &:focus {
    outline: none;
  }
`;

export const ProductCardContainer = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors["base-card"]};
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
`;

export const ProductCardImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
`;

export const AddCartWrapper = styled.div`
  width: 5rem;

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
