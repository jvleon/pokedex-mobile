import styled from 'styled-components';

export const MainContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Content = styled.View`
  width: 50%;
  background-color: white;
  border-radius: 5;
  text-align: center;
  shadowOffset:{  width: 10,  height: 10,  };
  shadowColor: black;
  shadowOpacity: 1.0;
`;
