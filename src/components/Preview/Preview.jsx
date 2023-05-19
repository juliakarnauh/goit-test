import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/Users/usersOperations";
import { selectUsers } from "../../redux/Users/usersSelectors";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  UserAvatarDiv,
  UserAvatar,
  UserTweets,
  UserFollower,
} from "../Tweets/Tweets.styled";
import {
  StyledGroupDiv,
  PreviewsList,
  UserName,
  Title,
  StyledDiv,
  StyledImg,
  ButtonIconDiv,
  IconButton,
} from "./Preview.styled";
import { formatFollowers } from "../../utils/formatFollowers";

const Previews = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <StyledGroupDiv>
      <StyledDiv>
        <Title>
          Welcome to Tweets. Here you will find a collection of interesting
          tweets from various users. Feel free to explore and discover
          compelling content. To stay updated, click the "Follow" button and
          subscribe to the users who catch your attention. Enjoy your browsing
          experience and engage with the vibrant Tweets community!
        </Title>
        <StyledImg
          src={require("../../assert/people.jpg")}
          alt="Comment"
          width="600"
        />
      </StyledDiv>
      <Swiper
        initialSlide={1}
        spaceBetween={-950}
        navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <PreviewsList>
              <UserAvatarDiv>
                <UserAvatar
                  src={user.avatar}
                  alt={user.user}
                  width="62"
                  height="62"
                />
              </UserAvatarDiv>
              <UserName>{user.user}</UserName>
              <UserTweets>{user.tweets} tweets</UserTweets>
              <UserFollower>
                {formatFollowers(user.followers)} Followers
              </UserFollower>
            </PreviewsList>
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonIconDiv>
        <IconButton
          type="button"
          className="swiper-prev"
          aria-label="previous review"
        >
          <FollowTheSignsIcon />
        </IconButton>
        <IconButton
          type="button"
          className="swiper-next"
          aria-label="next review"
        >
          <FollowTheSignsIcon />
        </IconButton>
      </ButtonIconDiv>
    </StyledGroupDiv>
  );
};
export default Previews;
