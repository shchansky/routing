import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  a {
    text-decoration: none;
    font-size: 20px;
    color: gray;
  }
  .active {
    color: red;
  }
  .active-link {
    color: red;
  }
`;
