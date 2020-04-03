import global from '../components/global'

// const plupins = {
//     install: function(Vue) {
//         Vue.component('global',global);
//     }
// }

//当为函数的时候，默认当做install方法
export default (Vue) => {
    Vue.component('global',global);
}