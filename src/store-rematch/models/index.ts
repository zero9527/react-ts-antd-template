import { createModel } from '@rematch/core';
// import detail from './detial';

export interface ICommonState {
  appName: string,
  isMobile: boolean,
  count: number
}
const initialState: ICommonState = {
  appName: 'react-ts-mdnote',
  isMobile: false,
  count: 0
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
    }
  },
  effects: {}
});

export {
  common,
  // detail
}
