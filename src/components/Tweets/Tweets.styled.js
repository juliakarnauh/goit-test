import styled from "styled-components";
export const UserList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
`;
export const UserItem = styled.li`
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const Logo = styled.img`
position: absolute;
left: 20px;
top: 20px;
`
export const StyledPicture = styled.img`
margin-top: 28px;
`
export const UserStyledDiv = styled.div`
  display: flex;
  width: 380px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const UserAvatarDiv = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  &::after {
    position: absolute;
    bottom: 35px;
    left: 80px;
    content: "";
    width: 150px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  &::before {
    position: absolute;
    bottom: 35px;
    right: 80px;
    content: "";
    width: 150px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
export const UserAvatar = styled.img`
  border-radius: 50%;
`;
export const UserTweets = styled.p`
  margin-top: 26px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24/20;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const UserFollower = styled.p`
  margin-top: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24/20;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const UserButtonFollow = styled.button`
  margin-top: 26px;

  align-items: center;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-transform: uppercase;
  color: #373737;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22/18;
  margin-bottom: 36px;
`;
export const UserButtonFollowing = styled.button`
  margin-top: 26px;

  align-items: center;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  background:#5CD3A8;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-transform: uppercase;
  color: #373737;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22/18;
  margin-bottom: 36px;
`;
