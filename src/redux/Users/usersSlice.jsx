import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersOperations";

const getInitialState = () => {
  const savedSubscriptions = localStorage.getItem("subscriptions");
  const subscriptions = savedSubscriptions
    ? JSON.parse(savedSubscriptions)
    : {};

  return {
    users: {
      items: [],
      isLoading: false,
      error: null,
      subscriptions,
    },
  };
};

const initialState = getInitialState();

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    Follow: (state, action) => {
      const { userId } = action.payload;
      const user = state.users.items.find((user) => user.id === userId);
      if (user) {
        user.isSubscribed = true;
        state.users.subscriptions[userId] = true;
        localStorage.setItem(
          "subscriptions",
          JSON.stringify(state.users.subscriptions)
        );
      }
    },
    unFollow: (state, action) => {
      const { userId } = action.payload;
      const user = state.users.items.find((user) => user.id === userId);
      if (user) {
        user.isSubscribed = false;
        delete state.users.subscriptions[userId];
        localStorage.setItem(
          "subscriptions",
          JSON.stringify(state.users.subscriptions)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.items = action.payload.map((user) => ({
          ...user,
          isSubscribed: state.users.subscriptions[user.id] || false,
        }));
        state.users.isLoading = false;
        state.users.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.users.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.users.isLoading = false;
          state.users.error = action.payload;
        }
      );
  },
});

export const { Follow, unFollow } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
