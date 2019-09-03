import { createModel } from '@rematch/core';
// import detail from './detial';

export interface ICommonState {
  appName: string,
  isMobile: boolean,
  count: number,
  countAsync: number
}
const initialState: ICommonState = {
  appName: 'react-ts-mdnote',
  isMobile: false,
  count: 0,
  countAsync: 0
};
const common = createModel({
  state: initialState,
  reducers: {
    setIsMobile(state: ICommonState, payload: boolean) {
      return {
        ...state,
        isMobile: payload
      }
    },
    addCount(state: ICommonState) {
      return {
        ...state,
        count: state.count + 1
      }
    },
    setCount(state: ICommonState, payload: number) {
      return {
        ...state,
        countAsync: payload
      }
    }
  },
  effects: (dispatch) => ({
    async setCountAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.common.setCount(payload)
    }
  })
});

export {
  common,
  // detail
}
