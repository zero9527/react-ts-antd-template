import { createModel } from '@rematch/core';
// import detail from './detial';

export interface CommonState {
  appName: string,
  isMobile: boolean,
  count: number
}
const initialState: CommonState = {
  appName: 'react-ts-mdnote',
  isMobile: false,
  count: 0
};
const common = createModel({
  state: initialState,
  reducers: {
    setIsMobile(state: CommonState, payload: boolean) {
      return {
        ...state,
        isMobile: payload
      }
    },
    addCount(state: CommonState) {
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
