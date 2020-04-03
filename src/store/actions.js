export default {
    addNumSync({commit},params) {
        setTimeout(() => {
            commit('addNum',params);
        },1000)
    }
}