import styled from "styled-components";
export const StyledGroupDiv = styled.div`
  margin: 40px;
`;
export const StyledDiv = styled.div`
  display: flex;
  gap: 40px;
  margin: 40px 70px 90px;
  align-items: center;
`;
export const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24/20;
  text-transform: uppercase;
  color: #373737;
  margin-top: 20px;
  text-align: center;
`;
export const StyledImg = styled.img`
  border-radius: 50%;
`;
export const PreviewsList = styled.li`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 40px;
  padding: 10px 0;
`;
export const UserName = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24/20;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-top: 10px;
`;

export const ButtonIconDiv = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 500px;
  justify-content: center;
`;
export const IconButton = styled.button`
  width: 61px;
  height: 61px;
  background-color: inherit;
  border: none;
  color:#373737;
  &:first-child {
    transform: rotateY(180deg);
  }
  :hover {
    color: #471ca9;
  }`