import * as mobx from 'mobx';

// 禁止在 action 外直接修改 state 
mobx.configure({ enforceActions: "observed"});
const { observable, action, computed, runInAction } = mobx;

let cache = sessionStorage.getItem('homeStore');

// 初始化数据
let initialState = {
  count: 0,
  data: {
    time: '2019-11-08'
  },
};

// 缓存数据
if (cache) {
  initialState = {
    ...initialState,
    ...JSON.parse(cache)
  }
}

class Home {
  @observable
  public count = initialState.count;

  @observable
  public data = initialState.data;

  @computed
  public get getTime() {
    return this.data.time;
  }

  @action
  public setCount = (_count: number) => {
    this.count = _count;
  }

  @action
  public setCountAsync = (_count: number) => {
    setTimeout(() => {
      runInAction(() => {
        this.count = _count;
      })
    }, 1000);
  }

  // public setCountFlow = flow(function *(_count: number) {
  //   yield setTimeout(() => {}, 1000);
  //   this.count = _count;
  // })
}

const homeStore = new Home();

mobx.spy((event) => {
  // 数据变化后触发，数据缓存
  if (event.type === 'reaction') {
    const obj = mobx.toJS(homeStore);
    sessionStorage.setItem('homeStore', JSON.stringify(obj));
  }
})

export type homeStoreType = typeof homeStore;
export default homeStore;
