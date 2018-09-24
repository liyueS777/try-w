const A = function (params) {
    console.log('我是第一个按需加载的')    
};
module.exports  = A;
// export const A = function (params) {
//     console.log('我是第一个按需加载的~')
// }


//  module.exports = {
//      A:function (params) {
//          console.log('我是第一个按需加载的')
//      }
//  }