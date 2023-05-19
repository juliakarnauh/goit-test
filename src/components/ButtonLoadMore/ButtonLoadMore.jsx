import React from "react";
import { LoadMoreButton } from "./ButtonLoadMore.styled";

const LoadMore = ({ handleLoadMore }) => {
  return <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>;
};

export default LoadMore;
