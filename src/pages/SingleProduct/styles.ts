import styled from "styled-components";

export const SingleProductContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem auto 0;
  max-width: 80rem;
  text-align: center;
`;

export const OtherImagesContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 3rem;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  margin-bottom: 3rem;

  .slick-slider {
    width: auto;
    // height: 0;
    padding-bottom: auto;
    position: relative;
  }

  .slick-dots {
    position: absolute;
    bottom: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    width: 100%;
    padding: 0;
    display: flex !important;
    justify-content: center;

    & > li {
      display: inline-block;
      margin: 0 0.5rem;
    }

    & > li > button {
      width: 1rem;
      height: 1rem;
      border: none;
      background-color: #c4c4c4;
      border-radius: 50%;
      cursor: pointer;

      &:before {
        content: "";
      }
    }

    & > li.slick-active > button {
      background-color: #121212;
    }
  }

  .slick-slide > img {
    width: auto;
    height: auto;
    // object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  gap: 4rem;
`;
