import React from "react";
import {
  UserList,
  UserItem,
  StyledDiv,
  Logo,
  UserAvatarDiv,
  StyledPicture,
  UserAvatar,
  UserTweets,
  UserFollower,
  UserButtonFollowing,
  UserButtonFollow,
  UserStyledDiv,
} from "./Tweets.styled";
import { formatFollowers } from "../../utils/formatFollowers";
const Tweets = ({ usersToShow, handleFollow }) => {
  return (
    <UserList>
      {usersToShow.map((user) => (
        <UserItem key={user.id}>
          <StyledDiv>
            <Logo src={require("../../assert/Logo.png")} alt="Logo" />
            <StyledPicture
              src={require("../../assert/picture.png")}
              alt="Comment"
            />
          </StyledDiv>
          <UserStyledDiv>
            <UserAvatarDiv>
              <UserAvatar
                src={user.avatar}
                alt={user.user}
                width="62"
                height="62"
              />
            </UserAvatarDiv>
            <UserTweets>{user.tweets} tweets</UserTweets>
            {user.isSubscribed ? (
              <UserFollower>
                {formatFollowers(user.followers + 1)} Followers
              </UserFollower>
            ) : (
              <UserFollower>
                {formatFollowers(user.followers)} Followers
              </UserFollower>
            )}
            {user.isSubscribed ? (
              <UserButtonFollowing
                type="button"
                onClick={() => handleFollow(user.id)}
              >
                Following
              </UserButtonFollowing>
            ) : (
              <UserButtonFollow
                type="button"
                onClick={() => handleFollow(user.id)}
              >
                Follow
              </UserButtonFollow>
            )}
          </UserStyledDiv>
        </UserItem>
      ))}
    </UserList>
  );
};

export default Tweets;
