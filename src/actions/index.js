import { ADD_ARTICLE } from "../constants/action-types";

// export function addArticle(payload) {
//     return {
//         type: "ADD_ARTICLE",
//         payload: payload
//     }
// }

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload: payload
    }
}