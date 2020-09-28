/**
 * 商城Vuex-mutations
 * 只能执行同步操作
 * mutations进行修改store.state中的值
 */
export default {
  saveUserName(state, username) {
    state.username = username;
  },
  saveCartCount(state, count) {
    state.cartCount = count;
  }
}