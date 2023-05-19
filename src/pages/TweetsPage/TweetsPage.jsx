import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { fetchUsers } from "../../redux/Users/usersOperations";
import {
  selectUsers,
  selectUnFollow,
  selectIsLoading,
} from "../../redux/Users/usersSelectors";
import { Follow, unFollow } from "../../redux/Users/usersSlice";
import RadioFilter from "../../components/RadioFilter/RadioFilter";
import Tweets from "../../components/Tweets/Tweets";
import LoadMoreButton from "../../components/ButtonLoadMore/ButtonLoadMore";
import { TailSpin } from "react-loader-spinner";
const TweetsPage = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectUsers);
  const nonSubscribedUsers = useSelector(selectUnFollow);
  const isLoading = useSelector(selectIsLoading);
  const [selectedOption, setSelectedOption] = useState("all");
  const [visibleTweets, setVisibleTweets] = useState(3);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLoadMore = () => {
    setVisibleTweets((prevVisibleTweets) => prevVisibleTweets + 15);
  };

  const usersToShow = useSelector((state) => {
    let users = allUsers.slice(0, visibleTweets);
    if (selectedOption === "subscribed") {
      return users.filter((user) => !nonSubscribedUsers.includes(user));
    } else if (selectedOption === "notSubscribed") {
      return users.filter((user) => nonSubscribedUsers.includes(user));
    } else {
      return users;
    }
  });

  const handleFollow = (userId) => {
    const user = usersToShow.find((user) => user.id === userId);
    if (user) {
      if (user.isSubscribed) {
        dispatch(unFollow({ userId }));
        Notify.failure(`You are not following ${user.user} anymore.`);
      } else {
        dispatch(Follow({ userId }));
        Notify.success(`You are following ${user.user}.`);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <TailSpin
          height="80"
          width="80"
          color="#471ca9"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <RadioFilter
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
          <Tweets usersToShow={usersToShow} handleFollow={handleFollow} />
          {usersToShow.length === visibleTweets && usersToShow.length < 18 && (
            <LoadMoreButton handleLoadMore={handleLoadMore} />
          )}
        </>
      )}
    </>
  );
};
export default TweetsPage;
