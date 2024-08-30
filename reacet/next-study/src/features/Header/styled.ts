import styled from 'styled-components';

export const HeaderStyled = styled.div`
  .noneHead{
    display: none !important
  }
  .nav {
    width: 100%;
    padding: 10px;
    background-color: black;
    position: fixed;
    top: 0;
    .navBox {
      width: 100%;
      display: flex;
      justify-content: center;
      div {
        margin: 0 20px;
        color: red;
        cursor: pointer;

      }
      div:hover {
        color: orange;
      }
    }
  }
`;
