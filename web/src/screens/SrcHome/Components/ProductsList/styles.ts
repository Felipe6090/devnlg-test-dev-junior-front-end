import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;

  flex-direction: column;

  gap: 50px;

  align-items: center;

  margin: 50px 0;
`;

export const SectionDiv = styled.div`
  width: 90%;

  display: flex;

  flex-direction: column;
  gap: 25px;
`;

export const DefaultRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsRow = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  row-gap: 25px;
`;

export const ProductDiv = styled.div`
  display: flex;

  flex-direction: column;
  gap: 5px;
`;
