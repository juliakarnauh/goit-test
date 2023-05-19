export const selectUsers = state => state.users.items;
export const selectUnFollow = state => state.users.items.filter(user => !user.isSubscribed);
export const selectIsLoading = (state) => state.users.isLoading;