import { init, RematchRootState } from '@rematch/core';
import * as models from './models/index';

// 缓存列表
const cacheList = ['common'];
const stateCache = sessionStorage.getItem('store-rematch');
// 初始化 state
const initialState = (stateCache && JSON.parse(stateCache)) || {};

const store = init({
  models,
  redux: {
    initialState
  }
});

// 监听每次 state 的变化
store.subscribe(() => {
  const state = store.getState();
  let stateData = {};
  
  Object.keys(state).forEach(item => {
    if (cacheList.includes(item)) {
      stateData[item] = state[item];
    }
  });

  sessionStorage.setItem('store-rematch', JSON.stringify(stateData));
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
export default store;
