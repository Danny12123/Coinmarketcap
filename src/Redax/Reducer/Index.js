import { combineReducers } from "redux";
import { AllStory } from "./AllStory";
import { Users } from "./UserR";

const reducers = combineReducers({
  AllStory,
  Users,
});

export default reducers;