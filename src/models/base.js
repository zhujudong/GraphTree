/**
 * Created by zhujudong on 2019-05-05.
 */
export default {
  namespace: 'base',
  state: {
    userName: '',
    userId:''
  },
  effects: {

  },
  reducers: {
    sendMsg(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
