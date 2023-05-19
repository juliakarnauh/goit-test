export const formatFollowers = (followers) => {
  if (followers >= 1000) {
    return followers.toLocaleString().replace(/\s/g, ",");
  }
  return followers;
};
