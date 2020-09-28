/**
 * 商城Vuex-actions
 * 在里面执行异步操作
 * 通过actions派发，然后commit提交想要修改
 */
export default {
  saveUserName(context,username){
    context.commit('saveUserName', username);
  },
  saveCartCount(context, count) {
    context.commit('saveCartCount', count);
  }
}