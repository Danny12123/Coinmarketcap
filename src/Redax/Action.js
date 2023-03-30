// import { ActionTypes } from "./ActionTypes"

export const AllstoryAction = (item) => {
    return {
      type: "ALL_STORY",
      payload: item,
    };
}
export const UserAction = (users) => {
    return {
      type: "USERS",
      payload: users,
    };
}