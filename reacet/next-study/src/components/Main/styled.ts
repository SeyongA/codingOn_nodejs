import styled from 'styled-components';

export const MainPageStyled = styled.div`
  margin-top: 100px;
  .mainTitle {
    color: red;
  }
  main {
    width: 1300px;
    margin: 0 auto;
    .dataDiv {
      width: 225px;
      height: 370px;
      float: left;
      justify-content: space-between;
      background-color: #eee;
      padding: 15px;
      margin: 10px;
      img {
        width: 200px;
        height: 250px;
      }
      p {
        margin-bottom: 5px;
      }
      .spanDiv {
        span {
          background-color: #333;
          color: #eee;
          text-align: center;
          margin: 2px;
          display:inline-block;
          padding: 2px;
        }
      }
    }
  }
`;
