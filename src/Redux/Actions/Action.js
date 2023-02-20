import { ActionTypes } from "../Constant/Constant";

export const Upload = (item) => {
    return {
        type: ActionTypes.UPLOAD,
        payload: item
    }
}