import { ActionTypes } from "../Constant/Constant";


export const UploadReducer = (state=[], {type, payload}) => {
    switch (ActionTypes.UPLOAD) {
        case type:
            return state;
    
        default:
            return state;
    }
}