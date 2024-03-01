// store.js 파일 생성
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
