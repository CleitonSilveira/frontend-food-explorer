import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: center;  
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 73px;
`;

export const Form = styled.form`
  padding: 0 136px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  text-align: center;

  > img, h1 {
    display: flex;
  }
  
  > h1 {
    font-size: 38px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }


  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;